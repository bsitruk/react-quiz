import React, { Component } from "react";
import { observable } from "mobx";
import { observer } from "mobx-react";

import { Block, SectionTitle } from "../../components";
import Quiz from "./Quiz";

@observer class QuizDisplay extends Component {
  @observable quizState;

  constructor(props) {
    super(props);
    this.quizState = {
      step: 0,
      answers: {}
    };
  }

  render() {
    const { quizStore, routeParams } = this.props;

    const { quizId } = routeParams;
    const quiz = quizStore.quizzes.find(q => q.id === +quizId);

    if (!quiz) {
      return <span>Loading...</span>;
    }

    return (
      <div>
        <SectionTitle title={quiz.title} />
        <Block>
          <Quiz quiz={quiz} quizState={this.quizState} />
        </Block>
      </div>
    );
  }
}

export default QuizDisplay;
