import React from "react";
import ResourceItem from "./ResourceItem";
import "./ResourcesList.css";
import svgPaths from "../SvgPaths";

const ResourcesList = (props) => {
  //   console.log(top3Resources);
  return (
    <ul className="resources-list">
      {props.items.map((resource, index) => (
        <ResourceItem key={index} svgPath={svgPaths[resource.title].img} title={resource.title} percent={resource.percent} />
      ))}
    </ul>
  );
};

export default ResourcesList;
