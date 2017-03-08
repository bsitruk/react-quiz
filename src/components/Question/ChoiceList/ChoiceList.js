import React from "react";
import { RadioGroup } from "react-radio-group";

import { Choice } from "../";

const ChoiceList = ({ question }) => (
  <RadioGroup name={`question-${question.id}`}>
    {question.answers.map(c => <Choice key={c.id} choice={c} />)}
  </RadioGroup>
);

export default ChoiceList;
