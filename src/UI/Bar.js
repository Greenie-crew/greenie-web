import React from "react";
import styles from "./Bar.module.css";

const Bar = (props) => {
  return <hr className={`${styles.bar} ${props.className}`}></hr>;
};

export default Bar;
