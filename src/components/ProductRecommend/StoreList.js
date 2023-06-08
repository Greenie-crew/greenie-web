import React from "react";
import StoreItem from "./StoreItem";
import classes from "./StoreList.module.css";

const StoreList = (props) => {
  return (
    <div className={classes.container}>
      {props.items && props.items.length > 0 ? (
        props.items
          .slice(0, 2)
          .map((album, index) => (
            <StoreItem key={index} img={album.imageUrl} title={album.productName} description={album.description} tags={album.hashTagName} />
          ))
      ) : (
        <p>상품이 존재하지 않습니다.</p>
      )}
    </div>
  );
};

export default StoreList;
