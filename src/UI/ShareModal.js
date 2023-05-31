import React, { useEffect } from "react";
import kakaoTalkIcon from "../images/KakaoTalk.png";
import urlIcon from "../images/URL_icon.png";
import classes from "./ShareModal.module.css";
import Card from "./Card";

const ShareModal = (props) => {
  useEffect(() => {
    window.Kakao.Link.createScrapButton({
      container: "#kakao-share", // id=kakao-share 부분을 찾아 그 부분에 렌더링합니다.
      requestUrl: window.location.href,
    });
  }, []);

  const handleCopyClipBoard = async () => {
    try {
      const currentUrl = window.location.href;
      await navigator.clipboard.writeText(currentUrl);
      alert("클립보드에 링크가 복사되었어요.");
    } catch (err) {
      alert("링크 복사에 실패했습니다.");
      console.error("링크 복사에 실패했습니다.", err);
    }
  };

  return (
    <div className={classes.modalBackdrop}>
      <Card className={classes.modal}>
        <header>
          <div className={classes.content}>공유하기</div>
          <div className={classes.closeButton} onClick={props.onClose}>
            X
          </div>
        </header>
        <div className={classes.iconContainer}>
          <img src={kakaoTalkIcon} alt="KakaoTalk" className={classes.icon} id="kakao-share" />
          <img src={urlIcon} alt="URL" className={classes.icon} onClick={handleCopyClipBoard} />
        </div>
      </Card>
    </div>
  );
};

export default ShareModal;
