import React from "react";
import { observer } from "mobx-react";
import { Radio } from "react-radio-group";

const Choice = ({ choice }) => (
  <span><Radio value={choice.id} />{choice.value}</span>
);

export default observer(Choice);
