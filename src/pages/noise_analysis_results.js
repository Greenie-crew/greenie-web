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
    title: "가전",
    percent: "20%",
    db: "50.2",
  },
  {
    title: "생리적",
    percent: "70%",
    db: "70.5",
  },
  {
    title: "가구",
    percent: "5%",
    db: "17.2",
  },
  {
    title: "발",
    percent: "1%",
    db: "14.5",
  },
  {
    title: "자연",
    percent: "2%",
    db: "14.5",
  },
];

function NoiseAnalysisResults() {
  const [resources, setResources] = useState(DUMMY_RESOURCES);

  useEffect(() => {
    setResources(DUMMY_RESOURCES);
  }, []);

  const sortedResources = resources.sort((a, b) => Math.round(parseFloat(b.percent)) - Math.round(parseFloat(a.percent)));

  //상위 3개 filter
  const top3Resources = sortedResources.slice(0, 3);

  //기타 퍼센트 계산
  const totalPercent = top3Resources.reduce((total, resource) => total + Math.round(parseFloat(resource.percent)), 0);
  const remainingPercent = 100 - totalPercent;

  const mergedResources = [...top3Resources, { title: "기타", percent: `${remainingPercent}%` }];

  return (
    <>
      <Header showRecord={true}>소음 분석 결과</Header>
      <GraphPanel result={mergedResources} />
      <Bar />
      <ResourcesPanel items={mergedResources} />
      <HealthPanel />
      <StorePanel />
      <Footer />
    </>
  );
}

export default NoiseAnalysisResults;
