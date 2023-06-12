import React from "react";
import StoreItem from "./StoreItem";
import classes from "./StoreList.module.css";

const StoreList = (props) => {
  const filteredItems = props.items.filter((album) => {
    const hashTags = album.hashTagName;
    for (let i = 0; i < hashTags.length; i++) {
      const tag = hashTags[i];
      const value = Object.values(tag)[0];
      console.log(value);
      if (props.resource && value === props.resource.title) {
        return true; // title과 일치하는 경우 해당 객체를 유지
      }
    }

    return false;
  });

  // Fisher-Yates 알고리즘을 사용하여 배열을 랜덤하게 섞는 함수
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  // filteredItems 배열을 랜덤하게 섞음
  const shuffledItems = shuffleArray(filteredItems);

  console.table("ShuffledItems: " + JSON.stringify(shuffledItems));

  return (
    <div className={classes.container}>
      {shuffledItems && shuffledItems.length > 0 ? (
        shuffledItems
          .slice(0, 2)
          .map((album, index) => (
            <StoreItem
              key={index}
              img={album.imageUrl}
              title={album.productName}
              description={album.description}
              tags={album.hashTagName.map((tag) => Object.values(tag)[0])}
            />
          ))
      ) : (
        <p>상품이 존재하지 않습니다.</p>
      )}
    </div>
  );
};

export default StoreList;
