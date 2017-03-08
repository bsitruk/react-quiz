import React from "react";
import { observer } from "mobx-react";

let QuizDisplay = ({ quizStore, routeParams }) => {
  const { quizId } = routeParams;
  const quiz = quizStore.quizzes.find(q => q.id === +quizId);

  if(!quiz) {
    return <span>Loading...</span>
  }

  return (
    <div>

    </div>
  );
};
QuizDisplay = observer(QuizDisplay);

export default QuizDisplay;
