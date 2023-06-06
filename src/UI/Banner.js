import React from "react";
import styles from "./Banner.module.css";
import banner_img from "../images/banner_img.png";
import { useNavigate } from "react-router-dom";

const Banner = (props) => {
  const navigate = useNavigate();
  const navigateToComplaint = () => {
    navigate("/solution");
    window.scrollTo(0, 0); // 페이지 이동 후 스크롤을 상단으로 이동
  };
  const title = "층간 소음 줄이기";
  const b_description = "상담 신청 전 먼저 소음 줄이기 콘텐츠 확인해 보세요!";

  return (
    <div className={`${styles.banner} ${props.className}`}>
      <div className={styles.mention}>
        <span className={styles.title}>{title}</span>
        <span className={styles.description}>{b_description}</span>
        <img src="/icons/circle_arrow.svg" alt="Circle Arrow" onClick={navigateToComplaint} />
      </div>
      <div className={styles.banner_image}>
        <img src={banner_img} alt="banner_img" />
      </div>
    </div>
  );
};

export default Banner;
