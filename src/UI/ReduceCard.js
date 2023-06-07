import React, { Fragment } from "react";

import classes from "./ReduceCard.module.css";
import CommunicateTitle from "../components/Solution/CommunicateTitle";
import landscape from "../images/landscape.png";

const ReduceCard = (props) => {
  return (
    <Fragment>
      <CommunicateTitle>
        <img src="/resources/footstep.png" alt="icon" />
        발소리 줄이기
      </CommunicateTitle>
      <div className={classes.img}>
        <img src={landscape} alt="card_image" />
      </div>
      <div className={classes.mention}>
        <p className={classes.title}>러그와 카펫 깔면 발소리를 줄일 수 있어요</p>
        <p className={classes.description}>
          러그와 카펫을 깔면 약간의 공기층이 생성되어 바닥에 직접적으로 진동이 전해지지 않아 소음을 완화할 수 있어요. 예쁜 인테리어는 덤이죠!
        </p>
      </div>
    </Fragment>
  );
};

export default ReduceCard;
