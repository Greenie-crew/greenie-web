import React, { Fragment } from "react";

import classes from "./ReduceCard.module.css";
import CommunicateTitle from "../components/Solution/CommunicateTitle";

const ReduceCard = (props) => {
  return (
    <Fragment>
      <CommunicateTitle>
        <img src={props.icon} alt="icon" />
        {props.iconTitle}
      </CommunicateTitle>
      <div className={classes.img}>
        <img src={props.cardImg} alt="card_image" />
      </div>
      <div className={classes.mention}>
        <p className={classes.title}>{props.title}</p>
        <p className={classes.description}>{props.description}</p>
      </div>
    </Fragment>
  );
};

export default ReduceCard;
