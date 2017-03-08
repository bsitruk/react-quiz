import React from "react";
import { observable } from "mobx";
import { observer } from "mobx-react";

import { Block } from "../../components/Block";
import { Question } from "../../components/Question";
import { SectionTitle } from "../../components/SectionTitle";

let QuizDisplay = ({ quizStore, routeParams }) => {
  const quizState = observable({
    step: 0,
    answers: {}
  });

  const { quizId } = routeParams;
  const quiz = quizStore.quizzes.find(q => q.id === +quizId);

  if(!quiz) {
    return <span>Loading...</span>
  }

  return (
    <div>
      <SectionTitle title={quiz.title} />
      <Block>
        <Question questions={quiz.questions} quizState={quizState} />
      </Block>
    </div>
  );
};
QuizDisplay = observer(QuizDisplay);

export default QuizDisplay;
