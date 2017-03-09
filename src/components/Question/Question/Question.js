import React from "react";
import { observer } from "mobx-react";

import { QuestionTitle } from "../";
import { ChoiceList } from "../";

const Question = ({ question }) => (
  <div>
    <QuestionTitle title={question.question} />
    <ChoiceList question={question} />
  </div>
);

export default observer(Question);
