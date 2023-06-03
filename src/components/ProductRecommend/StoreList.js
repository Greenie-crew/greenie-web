import React from "react";
import StoreItem from "./StoreItem";
import classes from "./StoreList.module.css";

const StoreList = (props) => {
  return (
    <div className={classes.container}>
      {props.items.map((album, index) => (
        <StoreItem key={album.id} title={album.title} description={album.description} tags={album.tags} />
      ))}
    </div>
  );
};

export default StoreList;
