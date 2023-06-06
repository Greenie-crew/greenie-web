import React from "react";
import Card from "../../UI/Card";

import classes from "./SolutionCard.module.css";

const SolutionCard = (props) => {
  const navigateToCommunity = () => {
    props.onClick(); // onClick 이벤트를 부모 컴포넌트로 전달
  };

  return (
    <Card className={classes.card} onClick={navigateToCommunity}>
      <span className={classes.title}>{props.title}</span>
      <span className={classes.description}>{props.description}</span>
      <img src={props.img} alt="svg" className={classes.img} />
    </Card>
  );
};

export default SolutionCard;
