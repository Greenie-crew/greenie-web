import { useState } from "react";
import styled from "styled-components";

// Styled-Component 라이브러리를 활용해 TabMenu 와 Desc 컴포넌트의 CSS를 구현.

const TabMenu = styled.ul`
  background-color: #f7f7fb;
  color: rgb(232, 234, 237);
  font-weight: 500;
  display: flex;
  flex-direction: row;
  list-style: none;
  margin-top: 14px;
  padding: 0;

  .submenu {
    // 기본 Tabmenu 에 대한 CSS를 구현
    height: 56px;
    width: 100%;
    padding: 1rem;
    font-size: 16px;
    color: #999999;
    transition: 0.5s;
    text-align: center;
    align-items: center;
  }

  .focused {
    //선택된 Tabmenu 에만 적용되는 CSS를 구현
    background-color: rgb(255, 255, 255);
    color: #1a93fe;
    border-top: 1px solid #f0f0f6;
    position: relative;
  }
`;

const Desc = styled.div``;

export const Tab = (props) => {
  // Tab Menu 중 현재 어떤 Tab이 선택되어 있는지 확인하기 위한 currentTab 상태와 currentTab을 갱신하는 함수가 존재해야 하고, 초기값은 0.
  const [currentTab, clickTab] = useState(0);

  const menuArr = [
    { name: props.name_1, content: props.content_1 },
    { name: props.name_2, content: props.content_2 },
  ];

  const selectMenuHandler = (index) => {
    // parameter로 현재 선택한 인덱스 값을 전달해야 하며, 이벤트 객체(event)는 쓰지 않는다
    // 해당 함수가 실행되면 현재 선택된 Tab Menu 가 갱신.
    clickTab(index);
  };

  return (
    <>
      <div>
        <TabMenu className={`${props.className}`}>
          {/* <li className="submenu">{menuArr[0].name}</li>
          <li className="submenu">{menuArr[1].name}</li>
          <li className="submenu">{menuArr[2].name}</li> */}
          {menuArr.map((el, index) => (
            <li className={index === currentTab ? "submenu focused" : "submenu"} onClick={() => selectMenuHandler(index)}>
              {el.name}
            </li>
          ))}
        </TabMenu>
        <Desc>
          <div>{menuArr[currentTab].content}</div>
        </Desc>
      </div>
    </>
  );
};
