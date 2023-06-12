import React from "react";

import classes from "./StoreItem.module.css";
import Card from "../../UI/Card";
import svgPaths from "../SvgPaths";

const StoreItem = (props) => {
  const tagsArray = props.tags;

  console.log("tagsArray:  " + JSON.stringify(tagsArray));

  return (
    <div className={classes.storeAlbum}>
      <Card className={classes.store}>
        <img src={props.img} alt="storeitem_img" className={classes.img} />
      </Card>
      <div className={classes.label}>
        <h4 className={classes.title}>{props.title}</h4>
        <span className={classes.description}>{props.description}</span>
        <div className={classes.tags}>
          {tagsArray.map((tag, index) => (
            <span key={index} className={classes.tag}>
              #{svgPaths[tag].kor}소리{" "}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StoreItem;
