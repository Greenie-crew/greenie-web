import React, { Fragment } from "react";
import styled from "styled-components";

// Styled-Component 라이브러리를 활용해 TabMenu 와 Desc 컴포넌트의 CSS를 구현.

const Tag = styled.div`
  background-color: #ffffff;
  color: #1a93fe;
  font-weight: 400;
  font-size: 14px;
  display: flex;
  flex-direction: row;
  list-style: none;
  margin: 8px 17px;
  margin-top: 12px;
  line-height: 20.72px;
`;

export const TagTemplate = (props) => {
  // Tab Menu 중 현재 어떤 Tab이 선택되어 있는지 확인하기 위한 currentTab 상태와 currentTab을 갱신하는 함수가 존재해야 하고, 초기값은 0.

  return (
    <Fragment>
      <Tag>{props.children}</Tag>
    </Fragment>
  );
};
