import React from "react";
import ResourceItem from "./ResourceItem";
import "./ResourcesList.css";
import svgPaths from "../SvgPaths";

const ResourcesList = (props) => {
  //   console.log(top3Resources);
  return (
    <ul className="resources-list">
      {props.items.map((resource) => (
        <ResourceItem key={resource.id} svgPath={svgPaths[resource.title].img} title={resource.title} percent={resource.percent} />
      ))}
    </ul>
  );
};

export default ResourcesList;
