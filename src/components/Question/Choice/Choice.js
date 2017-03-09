import React from "react";
import { Radio } from "react-radio-group";

import "./Choice.css";

const Choice = ({ choice, disabled }) => (
  <div className="Choice">
    <Radio value={choice.id} disabled={disabled} />{choice.value}
  </div>
);

export default Choice;
