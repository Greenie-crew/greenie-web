import React from "react";
// import { BrowserRouter, Link } from "react-router-dom";
// import { SlArrowRight } from "react-icons/sl";
// import CircleIcon from "../UI/CircleIcon";

import "./ResourceItem.css";
import Card from "../../UI/Card";

const ResourceItem = (props) => {
  //function clickHandler() {}

  return (
    <li>
      <Card className="resource-item">
        <div className="resource-img__outline">
          <img src={props.svgPath} alt="SVG" />
        </div>
        <div className="resource-item__description">
          <h3>{props.title}</h3>
          <span>{props.percent}</span>
        </div>
        {/* <BrowserRouter>
          <Link to="/" onClick={clickHandler} className="resource_link">
            소음 줄이기
            <SlArrowRight size={10} style={{ marginLeft: "5px", opacity: "0.5", color: "#767676" }} />
          </Link>
        </BrowserRouter> */}
      </Card>
    </li>
  );
};

export default ResourceItem;
