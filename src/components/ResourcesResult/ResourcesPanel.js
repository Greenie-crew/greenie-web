import React from "react";
import Button from "../../UI/Button";
import Panel from "../../UI/Panel";
import ResourcesList from "./ResourcesList";
import buttonCss from "../../UI/Button.module.css";

const ResourcesPanel = (props) => {
  const clickHandler = (event) => {
    event.preventDefault();
    console.log("Clicked!");
  };

  return (
    <div style={{ paddingBottom: "5px" }}>
      <Panel>소음원 종류</Panel>
      <ResourcesList key={props.id} items={props.items} />
      <Button className={buttonCss.btn_height} onClick={clickHandler}>
        소음 줄이기
      </Button>
    </div>
  );
};

export default ResourcesPanel;
