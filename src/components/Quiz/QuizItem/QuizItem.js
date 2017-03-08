import React from "react";

import "./QuizItem.css";

const QuizItem = ({ item }) => (
  <article className="QuizItem">
    <h2 className="QuizItem-title">{item.title}</h2>
    <span>{item.description}</span>
  </article>
);

export default QuizItem;
