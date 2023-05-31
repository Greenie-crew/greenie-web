import React, { useState } from "react";
import Panel from "../../UI/Panel";
import CardNewsList from "./CardNewsList";

const DUMMY_CARDS = [
  { title: "제로 소음 힐링", writer: "네이버 블로그" },
  { title: "청력 건강 지키기", writer: "매거진" },
  { title: "멘탈 회복하는 법", writer: "힐링 인플루언서" },
  { title: "title1", writer: "힐링 인플루언서" },
  { title: "title2", writer: "writer1" },
  { title: "title3", writer: "222222" },
  { title: "title4", writer: "3333333" },
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
