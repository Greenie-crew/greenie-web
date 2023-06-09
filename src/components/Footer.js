import React, { useState } from "react";
import classes from "../css/Footer.module.css";
import ShareModal from "../UI/ShareModal";

const Footer = (props) => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = "auto";
  };

  const handleReset = () => {
    if (typeof window.Android !== "undefined" && typeof window.Android.onNavigateToRecord === "function") {
      // 안드로이드 웹뷰의 함수 호출
      window.Android.onNavigateToRecord();
      console.log("Android to go!");
    }
  };

  return (
    <>
      <footer className={classes.footer}>
        <button onClick={handleReset}>다시 측정하기</button>
        <button className={classes.btn_active} onClick={openModal}>
          공유하기
        </button>
        {modalOpen && <ShareModal onClose={closeModal} />}
      </footer>
    </>
  );
};

export default Footer;
