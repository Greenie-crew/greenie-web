import React from "react";
import classes from "../css/Header.module.css";
import { SlArrowLeft } from "react-icons/sl";
import { useNavigate } from "react-router-dom";

const Header = (props) => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  const navigateToComplaint = () => {
    navigate("/complaint_apply");
    window.scrollTo(0, 0); // 페이지 이동 후 스크롤을 상단으로 이동
  };

  return (
    <div style={{ height: "56px" }}>
      <div className={classes.header}>
        <div className={classes.header__left}>
          <SlArrowLeft size={24} onClick={props.customOnClick || handleGoBack} />
        </div>
        <div className={`${classes.header__center} ${props.showRecord ? "" : classes.centerWithoutRecord}`}>
          <p>{props.children}</p>
        </div>
        <div className={classes.header__right} onClick={navigateToComplaint}>
          {props.showRecord && <p>기록</p>}
        </div>
      </div>
    </div>
  );
};

export default Header;
