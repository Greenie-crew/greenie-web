import React from "react";
import classes from "./GraphPanel.module.css";
import Graph from "../../UI/Graph";
import svgPaths from "../SvgPaths";

const GraphPanel = (props) => {
  const firstResource = props.result[0];
  const styles = {
    resource: {
      color: svgPaths[firstResource.title].color,
    },
  };

  return (
    <div className={classes.graphpanel}>
      <div className={classes.title}>
        주변에{" "}
        <span className={classes.resource} style={styles.resource}>
          {firstResource.title}
        </span>{" "}
        소음이
      </div>
      <div className={classes.subtitle}>가장 큽니다</div>
      <Graph resource={props.result} db={firstResource.db} />
      <div className={classes.description}>
        평균 <span className={classes.db}>{firstResource.db}</span> 기찻길 소음과 비슷해요.
      </div>
      <div className={classes.description}>장기간 노출시 청력 장애가 올 수 있어요!</div>
    </div>
  );
};

export default GraphPanel;
