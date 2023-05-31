import React from "react";
import ResourceItem from "./ResourceItem";
import "./ResourcesList.css";

const ResourcesList = (props) => {
  return (
    <ul className="resources-list">
      {props.items.map((resource) => (
        <ResourceItem key={resource.id} svgPath={resource.svgPath} title={resource.title} percent={resource.percent} />
      ))}
    </ul>
  );
};

export default ResourcesList;
