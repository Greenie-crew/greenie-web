import React from "react";
import classes from "./GraphPanel.module.css";
import Graph from "../../UI/Graph";
import svgPaths from "../SvgPaths";
import DbMention from "../ResourcesResult/DbMention";

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
          {firstResource.title}{" "}
        </span>
        소음이
      </div>
      <div className={classes.subtitle}>가장 큽니다</div>
      <Graph resource={props.result} db={firstResource.db} />
      <DbMention db={firstResource.db} />
    </div>
  );
};

export default GraphPanel;
