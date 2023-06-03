import React from "react";
import classes from "../css/Header.module.css";
import { SlArrowLeft } from "react-icons/sl";
import { useNavigate } from "react-router-dom";

const Header = (props) => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div style={{ height: "56px" }}>
      <div className={classes.header}>
        <div className={classes.header__left}>
          <SlArrowLeft size={24} onClick={handleGoBack} />
        </div>
        <div className={`${classes.header__center} ${props.showRecord ? "" : classes.centerWithoutRecord}`}>
          <p>{props.children}</p>
        </div>
        <div className={classes.header__right}>{props.showRecord && <p>기록</p>}</div>
      </div>
      <hr className={classes.hr} />
    </div>
  );
};

export default Header;
