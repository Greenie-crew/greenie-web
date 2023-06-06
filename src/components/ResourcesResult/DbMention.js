import React, { Fragment } from "react";
import classes from "./DbMention.module.css";

const DbMention = (props) => {
  const db = props.db;
  const styles = {
    dBcolor: { color: "" },
  };

  let sound = "";
  let warning = "";

  //   const soundMapping = getSoundMapping(db);
  //   setSoundment(soundMapping.soundment);
  //   setWarningment(soundMapping.warningment);
  //   color = soundMapping.color;

  if (db >= 120) {
    sound = "전투기 엔진 소음과 비슷해요";
    warning = "2분 이상 노출 시 난청이 올 수 있어요!";
    styles.dBcolor.color = "#F00000";
  } else if (db >= 110) {
    sound = "자동차 경적 소음과 비슷해요.";
    warning = "2분 이상 노출 시 난청이 올 수 있어요!";
    styles.dBcolor.color = "#F00000";
  } else if (db >= 100) {
    sound = "고속 열차 주행 소음과 비슷해요.";
    warning = "2분 이상 노출 시 난청이 올 수 있어요!";
    styles.dBcolor.color = "#F21900";
  } else if (db >= 90) {
    sound = "기계가 많은 공장 소음과 비슷해요.";
    warning = "장시간 노출 시 청력저하로 이어질 수 있어요!";
    styles.dBcolor.color = "#F97C00";
  } else if (db >= 80) {
    sound = "기찻길 소음과 비슷해요.";
    warning = "장시간 노출 시 청력저하로 이어질 수 있어요!";
    styles.dBcolor.color = "#FECA00";
  } else if (db >= 70) {
    sound = "시끄러운 사무실 소리와 비슷해요.";
    warning = "장시간 노출 시 청력저하로 이어질 수 있어요!";
    styles.dBcolor.color = "#0BBD0B";
  } else if (db >= 60) {
    sound = "대화 소리와 비슷해요.";
    warning = "일상적으로 노출되어도 괜찮아요.";
    styles.dBcolor.color = "#0F78E4";
  } else if (db >= 50) {
    sound = "조용한 실내 소리와 비슷해요.";
    warning = "일상적으로 노출되어도 괜찮아요.";
    styles.dBcolor.color = "#0A67E5";
  } else if (db >= 40) {
    sound = "도서관 소리와 비슷해요.";
    warning = "일상적으로 노출되어도 괜찮아요.";
    styles.dBcolor.color = "#1828CA";
  } else if (db >= 30) {
    sound = "속삭이는 소리와 비슷해요.";
    warning = "주변 환경에 신경써야할 소음원이 없어요.";
    styles.dBcolor.color = "#606383";
  } else {
    sound = "시계초침 소리와 비슷해요.";
    warning = "주변 환경에 신경써야할 소음원이 없어요.";
    styles.dBcolor.color = "#737373";
  }

  return (
    <Fragment>
      <div className={classes.description}>
        평균{" "}
        <span className={classes.db} style={styles.dBcolor}>
          {db}dB
        </span>{" "}
        {sound}
      </div>
      <div className={classes.description}>{warning}</div>
    </Fragment>
  );
};

export default DbMention;
