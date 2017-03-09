import React from "react";

const QuestionCount = ({ counter, total }) => (
  <div>
    Question <span>{counter}</span> of <span>{total}</span>
  </div>
);

export default QuestionCount;
