import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import styled from "styled-components";
import { Tab } from "../UI/Tab";
import ConnectWithNeighbours from "../components/Solution/ConnectWithNeighbours";
import ConsiderateNeighbours from "../components/Solution/ConsiderateNeighbours";
import { tabs } from "../components/Solution/tabs";

const CustomizedTabMenu = styled(Tab)`
  height: 48px;
  background-color: #ffffff;
  align-items: center;
  margin-top: 0;

  .submenu {
    border-bottom: 2px solid #f0f0f6;
    font-weight: 600;
    line-height: 24px;
    border-top: none;
  }

  .focused {
    border-bottom: 2px solid #1a93fe;
    border-top: none;
  }
`;

function ReduceNoiseFloors() {
  const location = useLocation();

  const { activeTab, Tabnum } = location.state ? location.state : { activeTab: 0, Tabnum: 0 };

  console.log("Selected tab index: " + activeTab);
  console.log("Selected tab num: " + Tabnum);

  return (
    <div style={{ marginBottom: "20%" }}>
      <Header showRecord={false}>층간 소음 줄이기</Header>
      <CustomizedTabMenu
        name_1="이웃과 소통하기"
        name_2="이웃을 배려하기"
        activeTab={activeTab}
        content_1={<ConnectWithNeighbours />}
        content_2={<ConsiderateNeighbours tabs={tabs} tabnum={Tabnum} />}></CustomizedTabMenu>
    </div>
  );
}

export default ReduceNoiseFloors;
