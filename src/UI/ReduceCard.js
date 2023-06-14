import React, { Fragment } from "react";
import ReactPlayer from "react-player";
import { CSSTransition } from "react-transition-group";

import classes from "./ReduceCard.module.css";
import CommunicateTitle from "../components/Solution/CommunicateTitle";

const ReduceCard = (props) => {
  return (
    <CSSTransition
      timeout={500}
      classNames={{
        enter: classes.enter,
        enterActive: classes.enteractive,
        exit: classes.exit,
        exitActive: classes.exitactive,
      }}>
      <Fragment>
        <CommunicateTitle>
          {props.icon && <img src={props.icon} alt="icon" />}
          {props.iconTitle}
        </CommunicateTitle>
        <div className={classes.img}>
          {props.img && <img src={props.img} alt="card_image" />}
          {props.video && (
            <div style={{ width: "350px", height: "206px", overflow: "hidden", padding: "10px", alignItems: "center" }}>
              <ReactPlayer url={props.video} muted controls playing={false} width={"100%"} height={"100%"} />
            </div>
          )}
        </div>
        <div className={classes.mention}>
          <p className={classes.title}>{props.title}</p>
          <p className={classes.description}>{props.description}</p>
        </div>
      </Fragment>
    </CSSTransition>
  );
};

export default ReduceCard;
