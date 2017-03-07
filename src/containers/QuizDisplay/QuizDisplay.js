import React from "react";

const QuizDisplay = ({ quizStore, routeParams }) => {
  const { quizId } = routeParams;
  return <h1>QuizDisplay {quizId}</h1>;
};

export default QuizDisplay;
