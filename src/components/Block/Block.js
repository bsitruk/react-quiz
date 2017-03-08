import React from "react";
import classNames from "classnames";

import "./Block.css";

const Block = ({ children, focusable }) => {
  const classes = classNames("Block", {
    "Block--focusable": focusable
  });

  return (
    <div className={classes}>
      {children}
    </div>
  );
};

export default Block;
