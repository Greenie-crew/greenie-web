import React from "react";
import Header from "../components/Header";
import styled from "styled-components";
import { Tab } from "../UI/Tab";
import ConnectWithNeighbours from "../components/Solution/ConnectWithNeighbours";

const CustomizedTabMenu = styled(Tab)`
  height: 48px;
  background-color: #ffffff;
  align-items: center;
  margin-top: 0;

  .submenu {
    border-bottom: 2px solid #f0f0f6;
    font-weight: 600;
    line-height: 24px;
  }

  .focused {
    border-bottom: 2px solid #1a93fe;
    border-top: none;
  }
`;

function ReduceNoiseFloors() {
  return (
    <div style={{ marginBottom: "20%" }}>
      <Header showRecord={false}>층간 소음 줄이기</Header>
      <CustomizedTabMenu name_1="이웃과 소통하기" name_2="이웃을 배려하기" content_1={<ConnectWithNeighbours />}></CustomizedTabMenu>
    </div>
  );
}

export default ReduceNoiseFloors;
