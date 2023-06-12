import React from "react";
import { CSManager } from "./CSManager";
import Bar from "../../UI/Bar";
import CSBoard from "./CSBoard";

const Consult = (props) => {
  const title = "이웃과 소통하려 노력했음에도 해결에 어려움을 겪고 계시나요?";
  const description = "층간 소음으로 인해 힘든 시간을 보내고 계시다면 아래 센터에서 상담을 신청할 수 있어요.";
  const imageCount = 2;

  return (
    <>
      <CSManager title={title} description={description} />
      <Bar />
      <CSBoard
        title="서울시 공동주택 층간 소음 상담실"
        description="서울시에 있는 공동주택 운영 내 이웃 간의 층간 소음 갈등과 분쟁을 조기에 해소할 수 있도록 실무 전문가의 무료 상담을 진행하고 있습니다."
        imageCount={imageCount}
        dialNumber="02-2133-7298"
        site="http://housing.seoul.go.kr/site/main/content/sh04_040100"
      />
      <CSBoard
        title="층간소음 이웃사이센터"
        description="층간소음 이웃사이센터는 공동주택 입주자 간 층간 소음 갈등 완화에 필요한 서비스를 제공하는 '중재 상담 센터'로 공동 주택 고나리 주체의 중재 하에 현장 방문 상담 및 층간 소음 측정 등을 제공합니다. "
        imageCount={imageCount}
        dialNumber="1661-2642"
        site="http://www.noiseinfo.or.kr"
      />
    </>
  );
};

export default Consult;
