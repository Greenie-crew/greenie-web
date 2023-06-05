import React, { useState } from "react";
import classes from "../css/Footer.module.css";
import ShareModal from "../UI/ShareModal";
import { useNavigate } from "react-router-dom";

const Footer = (props) => {
  const navigate = useNavigate();

  const navigateToComplaint = () => {
    navigate("/complaint_apply");
    window.scrollTo(0, 0); // 페이지 이동 후 스크롤을 상단으로 이동
  };
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <>
      <footer className={classes.footer}>
        <button onClick={navigateToComplaint}>다시 측정하기</button>
        <button className={classes.btn_active} onClick={openModal}>
          공유하기
        </button>
        {modalOpen && <ShareModal onClose={closeModal} />}
      </footer>
    </>
  );
};

export default Footer;
