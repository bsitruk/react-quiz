import React from "react";
import { observer } from "mobx-react";

import { Question, QuestionCount } from "../../components";

const Quiz = ({ quizState }) => (
  <div>
    <QuestionCount counter={quizState.counter} total={quizState.total} />
    <Question question={quizState.question} />
  </div>
);

export default observer(Quiz);
