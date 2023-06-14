import React, { Fragment, useEffect } from "react";
import queryString from "query-string";

import Header from "../components/Header";
import Footer from "../components/Footer";

import ResourcesPanel from "../components/ResourcesResult/ResourcesPanel";
import HealthPanel from "../components/HealthList/HealthPanel";
import GraphPanel from "../components/ResourcesResult/GraphPanel";

import StorePanel from "../components/ProductRecommend/StorePanel";

import Bar from "../UI/Bar";

import axios from "axios";

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

  const result = Object.entries(qs)
    .map(([key, value]) => {
      if (key === "average" || key === "uid" || key === "filename") {
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

  // {
  //     "username":"앱번호",
  //     "title":"데이터 제목",
  //     "analysisData":
  //     "소음원1 퍼센트,
  //        소음원2 퍼센트,소음원3 퍼센트",
  //     "bell": 평균데시벨,
  //     }

  const averageData = {
    title: "average",
    db: round(qs.average ? qs.average : 0),
    date: qs.filename,
    uid: qs.uid,
    result: result.map((item) => `${item.title} ${item.percent.replace("%", "")}`),
  };

  //   console.log("여기여 :   " + JSON.stringify(averageData.result));

  const postData = async () => {
    try {
      const response = await axios.post("http://43.200.32.42:8080/api/voice", {
        username: averageData.uid,
        title: averageData.date,
        analysisData: averageData.result[0],
        bell: averageData.db,
      });
      console.log(response.data); // 요청에 대한 응답 데이터 확인
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    postData();
  });

  const resources = result;

  const sortedResources = resources.sort((a, b) => Math.round(parseFloat(b.percent)) - Math.round(parseFloat(a.percent)));

  //상위 3개 filter
  const top3Resources = sortedResources.slice(0, 3);
  const top1 = sortedResources.slice(0, 1);

  //기타 퍼센트 계산
  const totalPercent = top3Resources.reduce((total, resource) => total + Math.round(parseFloat(resource.percent)), 0);
  const remainingPercent = 100 - totalPercent;

  const mergedResources = [...top3Resources, { title: "기타", percent: `${remainingPercent}%` }];

  const handleCustomFunction = () => {
    if (typeof window.Android !== "undefined" && typeof window.Android.onBackPress === "function") {
      // 안드로이드 웹뷰의 함수 호출
      window.Android.onBackPress();
    }
  };

  return (
    <Fragment>
      <Header customOnClick={handleCustomFunction} showRecord={false}>
        소음 분석 결과
      </Header>
      <GraphPanel result={mergedResources} avgDb={averageData} />
      <Bar />
      <ResourcesPanel items={mergedResources} resource={top1} />
      <HealthPanel />
      <StorePanel resource={top1} />
      <Footer resource={top1} avgDb={averageData} date={averageData.date} />
    </Fragment>
  );
}

export default NoiseAnalysisResults;
