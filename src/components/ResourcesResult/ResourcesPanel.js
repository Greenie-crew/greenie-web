import React from "react";
import Button from "../../UI/Button";
import Panel from "../../UI/Panel";
import ResourcesList from "./ResourcesList";
import buttonCss from "../../UI/Button.module.css";
import { useNavigate } from "react-router-dom";

const ResourcesPanel = (props) => {
  const navigate = useNavigate();
  const tabTitle = props.resource.title && props.resource[0].title;

  console.log("TabTitle  " + JSON.stringify(props.resource));
  let Tabnum = 0;

  if (tabTitle === "footsteps" || tabTitle === "clashing" || tabTitle === "explosion") {
    Tabnum = 0;
  } else if (tabTitle === "machine" || tabTitle === "furniture" || tabTitle === "domestic") {
    Tabnum = 1;
  } else if (tabTitle === "animal" || tabTitle === "pets") {
    Tabnum = 2;
  } else if (tabTitle === "instrument") {
    Tabnum = 3;
  } else {
    Tabnum = 4;
  }

  const clickHandler = () => {
    const activeTab = 1;
    const state = { activeTab, Tabnum };

    navigate("/solution_tab", { state });
    window.scrollTo(0, 0);
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
