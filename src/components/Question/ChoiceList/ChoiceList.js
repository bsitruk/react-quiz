import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import { RadioGroup } from "react-radio-group";

import { Choice } from "../Choice";

@inject("quizState")
@observer
class ChoiceList extends Component {
  onAnswerSelected = value => {
    const { question, quizState } = this.props;
    quizState.answers.set(question.id, value);
  }
  
  render() {
    const { question, quizState } = this.props;
    const selectedValue = quizState.answers.get(question.id);
    const disabled = !!selectedValue;

    return (
      <RadioGroup
        name={`question-${question.id}`}
        selectedValue={selectedValue || ""}
        onChange={this.onAnswerSelected}
      >
        {question.answers.map(c => <Choice key={c.id} choice={c} disabled={disabled} />)}
      </RadioGroup>
    );
  }
}

export default ChoiceList;
