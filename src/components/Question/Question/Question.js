import React from "react";

import { QuestionTitle } from "../";
import { ChoiceList } from "../";

const Question = ({ questions, quizState }) => (
    <div>
        <QuestionTitle title={question.question} />
        <ChoiceList question={question} />
    </div>
);

export default Question;
