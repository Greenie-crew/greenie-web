import React from "react";
import Header from "../components/Header";
import styled from "styled-components";
import house from "../images/house.png";
import SolutionCard from "../components/Solution/SolutionCard";
import { useNavigate } from "react-router-dom";

const SolutionPanel = styled.div`
  background-color: #ffffff;
  font-weight: 500;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 24px 16px;

  span {
    margin-top: 32px;
    color: #111111;
    font-weight: 600;
    font-size: 16px;
  }
`;

const CardSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: -12px 16px;
  justify-content: center;
`;

function ReduceNoise() {
  const navigate = useNavigate();
  const navigateToCommunity = () => {
    navigate("/solution_tab");
    window.scrollTo(0, 0); // 페이지 이동 후 스크롤을 상단으로 이동
  };
  return (
    <>
      <Header showRecord={false}>층간 소음 줄이기</Header>
      <SolutionPanel>
        <img src={house} alt="houseImg" />
        <span>나와 이웃을 위한 층간 소음 줄이는 방법</span>
      </SolutionPanel>
      <CardSection>
        <SolutionCard title="이웃과 소통하기" description="이웃과의 소통을 통해 층간 소음 해결하기" img="/icons/community.svg" onClick={navigateToCommunity} />
        <SolutionCard title="이웃을 배려하기" description="우리집 소음이 이웃에게 피해가 가지 않도록" img="/icons/neighbor_house.svg" />
      </CardSection>
    </>
  );
}

export default ReduceNoise;
