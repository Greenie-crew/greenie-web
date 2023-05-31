import React from "react";
import StoreItem from "./StoreItem";
import classes from "./StoreList.module.css";

const StoreList = (props) => {
  return (
    <div className={classes.container}>
      {props.items.map((album, index) => (
        <div>
          <StoreItem key={album.id} title={album.title} />
        </div>
      ))}
    </div>
  );
};

export default StoreList;
