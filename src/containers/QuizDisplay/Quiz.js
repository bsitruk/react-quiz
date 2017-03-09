import React, { Component } from "react";
import { observer } from "mobx-react";

import { Question, QuestionCount } from "../../components";

@observer class Quiz extends Component {
  handleAnswerSelected = value => {
    const { quiz, quizState } = this.props;
    const question = quiz.questions[quizState.step];

    quizState.answers[question.id] = value;
    if (quizState.step + 1 < quiz.questions.length) {
      quizState.step++;
    }
  };

  render() {
    const { quiz, quizState } = this.props;
    return (
      <div>
        <QuestionCount
          counter={quizState.step + 1}
          total={quiz.questions.length}
        />
        <Question
          question={quiz.questions[quizState.step]}
          quizState={quizState}
          onAnswerSelected={this.handleAnswerSelected}
        />
      </div>
    );
  }
}

export default Quiz;
