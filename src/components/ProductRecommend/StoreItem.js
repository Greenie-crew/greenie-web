import React, { useState } from "react";

import classes from "./StoreItem.module.css";
import Card from "../../UI/Card";

const StoreItem = (props) => {
  return (
    <div className={classes.storeAlbum}>
      <Card className={classes.store}></Card>
      <h4 className={classes.title}>{props.title}</h4>
    </div>
  );
};

export default StoreItem;
