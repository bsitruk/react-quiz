import React, { Component } from "react";
import { observer } from "mobx-react";

import { SectionTitle, QuizList } from "../../components";

@observer
class QuizSelection extends Component {
  goToQuiz = quizId => {
    this.props.router.push(`/quiz/${quizId}`);
  }

  render() {
    const { quizStore } = this.props;
    return (
      <div>
        <SectionTitle title="Select a quiz" />
        <QuizList list={quizStore.quizzes} onItemClick={this.goToQuiz} />
      </div>
    );
  }
}

export default QuizSelection;
