import React from "react";
import styles from "./CircleIcon.module.css";
import { FaCircle } from "react-icons/fa";

const CircleIcon = (props) => {
  return (
    <div className={styles.circleIcon}>
      <svg width="62" height="62">
        <FaCircle size={62} className={styles.circle} />
        <image href={props.img} alt="Circle Icon" x="14" y="14" width="32" height="32" />
      </svg>
      <h4>{props.title}</h4>
    </div>
  );
};

export default CircleIcon;
