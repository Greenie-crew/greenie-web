import React from "react";
import styles from "./Banner.module.css";
import banner_img from "../images/banner_img.png";

const Banner = (props) => {
  const title = "층간 소음 줄이기";
  const b_description = "상담 신청 전 먼저 소음 줄이기 콘텐츠 확인해 보세요!";

  return (
    <div className={`${styles.banner} ${props.className}`}>
      <div className={styles.mention}>
        <span className={styles.title}>{title}</span>
        <span className={styles.description}>{b_description}</span>
        <img src="/icons/circle_arrow.svg" alt="Circle Arrow" />
      </div>
      <div className={styles.banner_image}>
        <img src={banner_img} alt="banner_img" />
      </div>
    </div>
  );
};

export default Banner;
