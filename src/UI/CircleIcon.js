import React from "react";
import styles from "./CircleIcon.module.css";

const CircleIcon = (props) => {
  return (
    <svg width="50" height="50">
      <circle cx="25" cy="24" r="23" className={styles.circle} />
      <image {...props} x="10" y="10" width="30" height="30" className={styles.image} />
    </svg>
  );
};

export default CircleIcon;
