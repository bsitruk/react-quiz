import React from "react";
import { observer } from "mobx-react";
import { RadioGroup } from "react-radio-group";

import { Choice } from "../Choice";

const ChoiceList = ({ question, onAnswerSelected, getSelectedAnswer }) => (
  <RadioGroup
    name={`question-${question.id}`}
    selectedValue={getSelectedAnswer(question.id)}
    onChange={onAnswerSelected}
  >
    {question.answers.map(c => <Choice key={c.id} choice={c} />)}
  </RadioGroup>
);

export default observer(ChoiceList);
