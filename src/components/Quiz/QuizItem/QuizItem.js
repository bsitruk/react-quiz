import React from "react";

import "./QuizItem.css";

const QuizItem = ({title, description}) => (
    <article className="QuizItem">
        <h2 className="QuizItem-title">{title}</h2>
        <span>{description}</span>
    </article>
);

export default QuizItem;
