import React, { useState, useEffect } from "react";
import Panel from "../../UI/Panel";
import CardNewsList from "./CardNewsList";
import speaker from "../../images/speaker.png";
import earplug from "../../images/earplug.png";
import landscape from "../../images/landscape.png";
import { useNavigate } from "react-router-dom";

const DUMMY_CARDS = [
  { img: speaker, title: "74dB 이상의 소리 노출 피하기" },
  { img: earplug, title: "시끄러운 환경에서 귀마개 준비하기" },
  { img: landscape, title: "산책하기 등의 조용한 활동 즐기기" },
];

const HealthPanel = (props) => {
  const [cardNews, setCardNews] = useState(DUMMY_CARDS);

  const navigate = useNavigate();

  useEffect(() => {
    // Fetch or update the cardNews data here
    // Example:

    // eslint-disable-next-line no-use-before-define
    setCardNews(cardNews);
  }, [cardNews]);

  const navigateToHealth = () => {
    navigate("/mental_hearing_health");
    window.scrollTo(0, 0); // 페이지 이동 후 스크롤을 상단으로 이동
  };

  return (
    <div>
      <Panel showRecord={true} onClick={navigateToHealth}>
        소음 스트레스로부터 건강 챙기기
      </Panel>
      <CardNewsList items={cardNews} />
    </div>
  );
};

export default HealthPanel;
