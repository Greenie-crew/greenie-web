import React, { useState } from "react";

import classes from "./CardAlbum.module.css";
import Card from "../../UI/Card";

const CardAlbum = (props) => {
  return (
    <div style={{ marginLeft: "1rem" }}>
      <Card className={classes.album} />
      <h4>{props.title} </h4>
      <span>{props.writer}</span>
    </div>
  );
};

export default CardAlbum;
