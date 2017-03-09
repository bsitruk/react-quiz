import React from "react";
import { observer } from "mobx-react";

import { QuestionTitle } from "../";
import { ChoiceList } from "../";

const Question = ({ question, onAnswerSelected, getSelectedAnswer, quizState }) => (
  <div>
    <QuestionTitle title={question.question} />
    <ChoiceList
      question={question}
      quizState={quizState}
      onAnswerSelected={onAnswerSelected}
      getSelectedAnswer={getSelectedAnswer}
    />
  </div>
);

export default observer(Question);
