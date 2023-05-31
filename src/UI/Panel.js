import React from "react";

import classes from "./Panel.module.css";

const Panel = (props) => {
  return (
    <div className={classes.board}>
      <span className={classes.title}>{props.children}</span>
    </div>
  );
};

export default Panel;
