import React, { useState } from "react";
import Panel from "../../UI/Panel";
import CardNewsList from "./CardNewsList";
import speaker from "../../images/speaker.png";
import earplug from "../../images/earplug.png";
import landscape from "../../images/landscape.png";

const DUMMY_CARDS = [
  { img: speaker, title: "74dB 이상의 소리 노출 피하기" },
  { img: earplug, title: "시끄러운 환경에서 귀마개 준비하기" },
  { img: landscape, title: "산책하기 등의 조용한 활동 즐기기" },
];

const ResourcesPanel = (props) => {
  const [cardNews, setCardNews] = useState(DUMMY_CARDS);

  return (
    <div>
      <Panel>소음 스트레스로부터 건강 챙기기</Panel>
      <CardNewsList items={cardNews} />
    </div>
  );
};

export default ResourcesPanel;
