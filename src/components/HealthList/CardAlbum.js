import React, { useState } from "react";

import classes from "./CardAlbum.module.css";
import Card from "../../UI/Card";

const CardAlbum = (props) => {
  return (
    <div style={{ marginLeft: "1rem" }}>
      <Card className={classes.album}>
        <img src={props.img} alt="건강챙기기 이미지" />
      </Card>
      <h4>{props.title} </h4>
    </div>
  );
};

export default CardAlbum;
