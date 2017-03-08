import React from "react";
import { Radio } from "react-radio-group";

const Choice = ({ choice }) => (
  <span><Radio value={choice.id} />{choice.value}</span>
);

export default Choice;
