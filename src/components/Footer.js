import React, { useState } from "react";
import classes from "../css/Footer.module.css";
import ShareModal from "../UI/ShareModal";
import { useSelector } from "react-redux";

const Footer = (props) => {
  const [modalOpen, setModalOpen] = useState(false);

  const imageURL = useSelector((state) => state.imageURL);

  console.log("imageURL : " + imageURL);

  const openModal = () => {
    setModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = "auto";
  };

  const handleReset = () => {
    // 안드로이드 웹뷰의 함수 호출
    if (typeof window.Android !== "undefined" && typeof window.Android.onNavigateToRecord === "function") {
      // 안드로이드 웹뷰의 함수 호출
      window.Android.onNavigateToRecord();
    }
  };

  return (
    <>
      <footer className={classes.footer}>
        <button onClick={handleReset}>다시 측정하기</button>
        <button className={classes.btn_active} onClick={openModal}>
          공유하기
        </button>
        {modalOpen && <ShareModal onClose={closeModal} avgDb={props.avgDb.db} resource={props.resource} date={props.date} imgURL={imageURL} />}
      </footer>
    </>
  );
};

export default Footer;
