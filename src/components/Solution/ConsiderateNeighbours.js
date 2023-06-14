import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import "./ConsiderateNeighbours.css";

const ConsiderateNeighbours = ({ tabs, tabnum }) => {
  const [current, setCurrent] = useState(tabnum !== undefined ? tabnum : 0);
  console.log("Tab num이 뭐게용 : " + tabnum);

  const changeTab = (e) => {
    e.stopPropagation();
    setCurrent(parseInt(e.target.getAttribute("data-index"), 10));
  };

  return (
    <div className="tabs">
      <div className="tabs__titles">
        {tabs.map((tab, index) => (
          <h2
            className={`tabs__titles__title ${current === index ? "active" : ""}`}
            data-active={current === index}
            data-index={index}
            key={"tab-title-" + index}
            onClick={changeTab}>
            {tab.title}
          </h2>
        ))}
      </div>
      <div className="tabs__contents">
        <div className="tabs__contents__content">
          {tabs.map((tab, index) => (
            <CSSTransition
              key={"tab-text-" + index}
              in={current === index}
              timeout={500}
              classNames={{
                enter: "slide-exit",
                enterActive: "slide-exit-active",
                exit: "slide-enter",
                exitActive: "slide-enter-active",
              }}
              unmountOnExit>
              {tab.text}
            </CSSTransition>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ConsiderateNeighbours;
