import React, { useEffect } from "react";
import kakaoTalkIcon from "../images/KakaoTalk.png";
import urlIcon from "../images/URL_icon.png";
import classes from "./ShareModal.module.css";
import Card from "./Card";
import svgPaths from "../components/SvgPaths";

const ShareModal = (props) => {
  useEffect(() => {
    const { Kakao } = window;
    if (!Kakao.isInitialized()) {
      console.error("Kakao SDK not initialized.");
      return;
    }

    // 공유 기능을 구현하는 코드 작성

    // 예시: 카카오 링크 공유 함수 호출
  }, []);

  const kakaoShare = () => {
    const { Kakao } = window;

    const webLinkUrl = window.location.href;

    Kakao.Link.sendDefault({
      objectType: "feed",
      content: {
        title: "[분석날짜] 소음분석결과",
        description: `평균DB: ${props.avgDb} , 소음원: ${svgPaths[props.resource[0].title].kor}`,
        imageUrl: "https://greenie-web.vercel.app/logo192.png",
        link: {
          webUrl: `${webLinkUrl}`,
        },
      },
    });
  };

  const handleCopyClipBoard = async () => {
    const currentUrl = window.location.href;
    try {
      await navigator.clipboard.writeText(currentUrl);
      alert("클립보드에 링크가 복사되었어요.");
    } catch (err) {
      alert(currentUrl);
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
          <img src={kakaoTalkIcon} alt="KakaoTalk" className={classes.icon} onClick={kakaoShare} />
          <img src={urlIcon} alt="URL" className={classes.icon} onClick={handleCopyClipBoard} />
        </div>
      </Card>
    </div>
  );
};

export default ShareModal;
