import React, { Fragment } from "react";
import queryString from "query-string";

import Header from "../components/Header";
import Footer from "../components/Footer";

import ResourcesPanel from "../components/ResourcesResult/ResourcesPanel";
import HealthPanel from "../components/HealthList/HealthPanel";
import GraphPanel from "../components/ResourcesResult/GraphPanel";

import StorePanel from "../components/ProductRecommend/StorePanel";

import Bar from "../UI/Bar";

//소음원 종류 데이터
// const DUMMY_RESOURCES = [
//   {
//     title: "가전",
//     percent: "20%",
//   },

//   {
//     title: "악기음악",
//     percent: "70%",
//   },

//   {
//     title: "가구",
//     percent: "5%",
//   },

//   {
//     title: "발",
//     percent: "1%",
//   },
// ];

function NoiseAnalysisResults() {
  function round(num) {
    var m = Number((Math.abs(num) * 10).toPrecision(15));
    return (Math.round(m) / 10) * Math.sign(num);
  }

  let qs = queryString.parse(window.location.search);

  const averageData = {
    title: "average",
    db: round(qs.average),
  };

  const result = Object.entries(qs)
    .map(([key, value]) => {
      if (key === "average") {
        return null;
      } else {
        const roundedValue = round(value);
        return {
          title: key,
          percent: `${roundedValue}%`,
        };
      }
    })
    .filter((item) => item !== null);

  const resources = result;

  const sortedResources = resources.sort((a, b) => Math.round(parseFloat(b.percent)) - Math.round(parseFloat(a.percent)));

  //상위 3개 filter
  const top3Resources = sortedResources.slice(0, 3);

  //기타 퍼센트 계산
  const totalPercent = top3Resources.reduce((total, resource) => total + Math.round(parseFloat(resource.percent)), 0);
  const remainingPercent = 100 - totalPercent;

  const mergedResources = [...top3Resources, { title: "기타", percent: `${remainingPercent}%` }];

  const handleCustomFunction = () => {
    if (typeof window.Android !== "undefined" && typeof window.Android.onBackPress === "function") {
      // 안드로이드 웹뷰의 함수 호출
      window.Android.onBackPress();
      console.log("Android to go!");
    }
  };

  return (
    <Fragment>
      <Header customOnClick={handleCustomFunction} showRecord={true}>
        소음 분석 결과
      </Header>
      <GraphPanel result={mergedResources} avgDb={averageData} />
      <Bar />
      <ResourcesPanel items={mergedResources} />
      <HealthPanel />
      <StorePanel />
      <Footer />
    </Fragment>
  );
}

export default NoiseAnalysisResults;
