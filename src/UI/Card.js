import React from "react";
import styles from "./Card.module.css";

const Card = (props) => {
  const onClickEvent = () => {
    if (props.onClick) {
      props.onClick(); // onClick 이벤트를 부모 컴포넌트로 전달
    }
  };
  return (
    <div className={`${styles.card} ${props.className}`} onClick={onClickEvent}>
      {props.children}
    </div>
  );
};

export default Card;
