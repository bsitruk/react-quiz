import React from "react";

import { QuestionTitle } from "../";
import { ChoiceList } from "../";

const Question = ({ question, quizState }) => (
    <div>
        <QuestionTitle title={question.question} />
        <ChoiceList question={question} />
    </div>
);

export default Question;
