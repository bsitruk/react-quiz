import React from "react";
import { observer } from "mobx-react";

import { QuestionTitle } from "../";
import { ChoiceList } from "../";

const Question = ({ question, onAnswerSelected, quizState }) => (
    <div>
        <QuestionTitle title={question.question} />
        <ChoiceList question={question} quizState={quizState} onAnswerSelected={onAnswerSelected} />
    </div>
);

export default observer(Question);
