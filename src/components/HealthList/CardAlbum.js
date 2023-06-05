import React from "react";

import classes from "./CardAlbum.module.css";
import Card from "../../UI/Card";

const CardAlbum = (props) => {
  const { divClassName, cardClassName } = props;
  return (
    <div className={`${classes.div} ${divClassName}`}>
      <Card className={`${classes.album} ${cardClassName}`}>
        <img src={props.img} alt="건강챙기기 이미지" />
      </Card>
      <h4>{props.title} </h4>
    </div>
  );
};

export default CardAlbum;
