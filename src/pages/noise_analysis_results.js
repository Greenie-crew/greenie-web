import React, { useState, useEffect } from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";

import ResourcesPanel from "../components/ResourcesResult/ResourcesPanel";
import HealthPanel from "../components/HealthList/HealthPanel";
import GraphPanel from "../components/ResourcesResult/GraphPanel";

import StorePanel from "../components/ProductRecommend/StorePanel";

import Bar from "../UI/Bar";

//소음원 종류 데이터
const DUMMY_RESOURCES = [
  {
    svgPath: "/icons/car.svg",
    title: "자동차",
    percent: "70%",
  },
  {
    svgPath: "/icons/vaccum-cleaner.svg",
    title: "청소기",
    percent: "20%",
  },
  {
    svgPath: "/icons/drum1.svg",
    title: "악기",
    percent: "5%",
  },
  {
    svgPath: "/icons/dots.svg",
    title: "기타",
    percent: "5%",
  },
];

function NoiseAnalysisResults() {
  const [resources, setResources] = useState(DUMMY_RESOURCES);

  return (
    <>
      <Header showRecord={true}>소음 분석 결과</Header>
      <GraphPanel />
      <Bar />
      <ResourcesPanel items={resources} />
      <HealthPanel />
      <StorePanel />
      <Footer />
    </>
  );
}

export default NoiseAnalysisResults;
