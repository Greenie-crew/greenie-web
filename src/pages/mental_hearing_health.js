import React, { Fragment } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import CardAlbum from "../components/HealthList/CardAlbum";
import speaker from "../images/speaker.png";
import earplug from "../images/earplug.png";
import louder from "../images/louder.png";
import landscape from "../images/landscape.png";
import CircleIcon from "../UI/CircleIcon";
import nuts from "../images/nuts.png";
import fish from "../images/fish.png";
import fruit from "../images/fruit.png";
import vegetable from "../images/vegetable.png";

const HealthTitle = styled.div`
  background-color: #ffffff;
  font-weight: 600;
  list-style: none;
  height: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
  padding: 0;
  margin-top: 24px;

  img {
    margin-right: 12px;
  }
`;

const HealthPanel = styled.div`
  padding: 0 17px;

  .order_title {
    margin-top: 24px;
  }

  .fruit_icon {
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 100px;
  }

  .number {
    font-size: 16px;
    line-height: 23.68px;
    font-weight: 600;
    color: #1a93fe;
    margin-right: 5px;
  }

  .label {
    font-size: 14px;
    font-weight: 500;
    line-height: 20.72px;
    text-align: center;
    color: #111111;
  }

  .card_list {
    display: flex;
  }

  .cardAlbum_div {
    margin-right: 10px;
    width: 100%;
  }

  .cardAlbum_div h4 {
    margin-top: 12px;
    margin-bottom: 0;
  }

  .cardAlbum_custom {
    width: 158px;
    height: 158px;
    margin-top: 12px;
  }

  .source {
    margin-left: 2.6rem;
    font-weight: 400;
    color: #767676;
    font-size: 12px;
    margin-top: -2px;
  }

  #inlineFrameAcupressure {
    min-width: 325px;
    min-height: 183px;
    margin-top: 12px;
    border-radius: 10px;
  }
`;

const fruits = [
  {
    img: nuts,
    title: "견과류",
  },
  {
    img: fish,
    title: "냉수성 어류 (청어, 송어 등)",
  },
  {
    img: fruit,
    title: "과일",
  },
  {
    img: vegetable,
    title: "채소",
  },
];

function MentalHearingHealth() {
  return (
    <Fragment>
      <Header showRecord={false}>건강 챙기기</Header>
      <HealthPanel>
        {/* 소음 다이어트 */}
        <HealthTitle>
          <img src="/icons/diet.svg" alt="diet_svg" />
          소음 다이어트
        </HealthTitle>
        <div className="order_title">
          <span className="number">1</span>
          <span className="label">소음 피하기</span>
        </div>
        <div className="card_list">
          <CardAlbum img={speaker} title="74dB 이상의 소리에 노출 되지 않도록 조심하기" divClassName="cardAlbum_div" cardClassName="cardAlbum_custom" />
          <CardAlbum img={earplug} title="시끄러운 환경에 있어야 할 경우 귀마개 준비하기" divClassName="cardAlbum_div" cardClassName="cardAlbum_custom" />
        </div>
        <div className="order_title">
          <span className="number">2</span>
          <span className="label">소음 생산 적게하기</span>
        </div>
        <div className="card_list">
          <CardAlbum img={louder} title="위험할 경우에만 자동차 경적 울리기" divClassName="cardAlbum_div" cardClassName="cardAlbum_custom" />
          <CardAlbum img={landscape} title="산책하기 등의 조용한 활동 즐기기" divClassName="cardAlbum_div" cardClassName="cardAlbum_custom" />
        </div>

        {/* 청력 건강에 좋은 지압법 */}
        <HealthTitle style={{ marginTop: "32px" }}>
          <img src="/icons/doctor.svg" alt="doctor_svg" />
          청력 건강에 좋은 지압법 배워봐요!
        </HealthTitle>
        <div className="source">SBS News</div>
        <iframe
          frameBorder="0"
          allowFullScreen
          id="inlineFrameAcupressure"
          title="Inline Frame Acupressure"
          src="https://news.sbs.co.kr/news/newsPlayerIframe.do?news_id=N1002876611&type=NEWS&plink=SBSNEWS&autoplay=Y&playmode=&NoAD=N&vodId=#play"></iframe>

        {/* 청력에 좋은 음식 */}
        <HealthTitle>
          <img src="/icons/fruits.svg" alt="fruit_svg" />
          청력에 좋은 음식
        </HealthTitle>
        <div className="order_title fruit_icon">
          {fruits.map((fruit, index) => (
            <CircleIcon key={index} img={fruit.img} title={fruit.title} />
          ))}
        </div>
      </HealthPanel>
    </Fragment>
  );
}

export default MentalHearingHealth;
