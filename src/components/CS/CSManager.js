import { useState } from "react";
import styled from "styled-components";
import cs from "../../images/cs.png";

const CsBox = styled.div`
  background-color: #ffffff;
  font-weight: 500;
  list-style: none;
  height: 267px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 24px;

  img {
    margin-bottom: 12px;
  }

  .title {
    font-size: 16px;
    font-weight: 600;
    line-height: 23.68px;
    text-align: center;
    padding: 0 26px;
  }

  .description {
    margin-top: 12px;
    font-size: 14px;
    font-weight: 400;
    line-height: 20.72px;
    text-align: center;
    color: #767676;
  }
`;

export const CSManager = (props) => {
  return (
    <CsBox>
      <img src={cs} alt="cs_image" />
      <div className={"title"}>{props.title}</div>
      <div className={"description"}>{props.description}</div>
    </CsBox>
  );
};
