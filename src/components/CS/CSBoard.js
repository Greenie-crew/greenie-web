import React from "react";
import styles from "./CSBoard.module.css";
import dial from "../../images/dial.png";
import url_blue from "../../images/url_blue.png";

const CSBoard = (props) => {
  const handleDialClick = () => {
    // 여기에서 dial 이미지를 클릭했을 때 수행할 동작을 정의합니다.
    // 예를 들어, 전화번호로 연결되는 기능을 구현할 수 있습니다.
    console.log("전화번호로 연결");
    const phoneNumber = props.dialNumber;
    window.location.href = `tel:${phoneNumber}`;
  };
  return (
    <div className={styles.board}>
      <h2 className={styles.title}>{props.title}</h2>
      <hr />
      <div className={styles.icons}>
        {props.imageCount === 1 ? (
          <a href={props.site}>
            <img src={url_blue} alt="url_blue" />
          </a>
        ) : null}
        {props.imageCount === 2 ? (
          <>
            <img src={dial} alt="dial" onClick={handleDialClick} />
            <a href={props.site}>
              <img src={url_blue} alt="url_blue" />
            </a>
          </>
        ) : null}
      </div>
      <div className={styles.description}>{props.description}</div>
    </div>
  );
};

export default CSBoard;
