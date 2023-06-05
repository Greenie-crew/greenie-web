import React from "react";

import classes from "./Panel.module.css";

const Panel = (props) => {
  return (
    <div className={classes.board}>
      <span className={classes.title}>{props.children}</span>
      <span className={classes.moreInfo} onClick={props.onClick}>
        {props.showRecord && <span>더보기</span>}
      </span>
    </div>
  );
};

export default Panel;
