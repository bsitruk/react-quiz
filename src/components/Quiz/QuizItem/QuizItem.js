import React from "react";

import "./QuizItem.css";

const QuizItem = ({name, description}) => (
    <article className="QuizItem">
        <h2 className="QuizItem-title">{name}</h2>
        <span>{description}</span>
    </article>
);

export default QuizItem;
