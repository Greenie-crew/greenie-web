import React from "react";
import ResourceItem from "./ResourceItem";
import "./ResourcesList.css";
import svgPaths from "../SvgPaths";

const ResourcesList = (props) => {
  //상위 3개 filter
  const top3Resources = props.items.slice(0, 3);
  //기타 분류
  const otherResources = props.items.slice(3);

  //기타 퍼센트 계산
  const totalPercent = top3Resources.reduce((total, resource) => total + Math.round(parseFloat(resource.percent)), 0);
  const remainingPercent = 100 - totalPercent;

  const mergedResources = [...top3Resources, { title: "기타", percent: `${remainingPercent}%` }];

  console.log(top3Resources);
  return (
    <ul className="resources-list">
      {mergedResources.map((resource) => (
        <ResourceItem key={resource.id} svgPath={svgPaths[resource.title].img} title={resource.title} percent={resource.percent} />
      ))}
    </ul>
  );
};

export default ResourcesList;
