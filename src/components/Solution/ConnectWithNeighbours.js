import React, { Fragment } from "react";
import styled from "styled-components";
import msg_img1 from "../../images/msg_img1.png";
import msg_img2 from "../../images/msg_img2.png";

const CommunicateTitle = styled.div`
  background-color: #ffffff;
  font-weight: 600;
  font-size: 16px;
  list-style: none;
  display: flex;
  flex-direction: row;
  align-items: center;

  padding: 0 17px;
  margin-top: 32px;

  img {
    margin-right: 12px;
  }
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: 500;
  font-size: 14px;
  list-style: none;
  align-items: center;
  padding: 0 17px;
  margin-top: 24px;
  line-height: 20.72px;
  color: #111111;

  .sub {
    font-weight: 400;
    color: #767676;
    font-size: 12px;
    line-height: 17.76px;
    margin-top: -12px;
    margin-right: 10px;
  }
`;

const ConnectWithNeighbours = (props) => {
  return (
    <Fragment>
      <CommunicateTitle>
        <img src="/icons/message.svg" alt="message_svg" />
        이웃에게 층간 소음에 관해 이야기를
        <br />
        이해심을 담은 편지로 전달해요
      </CommunicateTitle>
      <Description>
        아래의 내용은 윗집의 층간 소음에 아랫집 주민이 보낸 진심이 담긴 편지의 일부입니다. 이 편지가 전해진 후, 윗집 또한 배려를 해주며 변화의 시작이
        되었습니다.
      </Description>
      <img src={msg_img1} alt="msg_img1" style={{ marginTop: "12px" }} />
      <img src={msg_img2} alt="msg_img2" style={{ marginTop: "12px" }} />
      <Description>
        <p className="sub">
          세계일보, 윗집의 층간 소음에 이모(52)씨가 이달 중순 이해심을 담아 전달한 편지의 일부. 놀랍게도 이 편지가 전해진 후, 윗집의 층간 소음이 많이
          줄었다면서, 소음을 줄이고자 노력하는 윗집 이웃이 훌륭한 사람들이라고 그는 고마워했다. 이씨 제공
        </p>
      </Description>
      <Description>
        층간 소음을 내는 윗집에 편지를 전달하면서 부드럽게 주의를 요청드렸다고 해요. 더불어 층간 소음이 날 수밖에 없는 상황을 이해한다는 말도요. 서로를 이해하고
        배려를 요청하는 편지로 큰 분쟁 없이 잘 지내고 계시다고 합니다.
      </Description>
      <Description>
        이렇게 이웃과 소통할 때 서로의 가장 편안한 휴식처임을 알고 소음주의 "고지"가 아닌 조심스러운 "배려"를 요청하면 마음도 편안한 휴식처가 될 수 있어요.
      </Description>

      <CommunicateTitle>
        <img src="/icons/bugle.svg" alt="bugle_svg" />
        이웃도 소음을 만드는지 잘 모를 수 있어요
      </CommunicateTitle>
      <Description>
        알게 모르게, 그리고 의도치 않게 우리는 소음을 만들며 살고 있어요. 어떤 소음은 금방 사라져 이웃에게 전달되지 않지만 어떤 소음은 우리집에서 들리는 것보다
        크게 이웃에게 전달되기도 합니다. 특히나 발소리는 건물을 진동시키며 이웃에게 전달되어 우리집보다 이웃에게 더 크게 들릴 수 있답니다.
      </Description>
      <Description>
        혹시 이웃의 발소리가 너무 크다면 이웃도 모르고 있을 수 있어요. 실내화나 양말 선물을 통해 이웃이 모르고 있을 수 있는 소음을 줄여달라고 부탁해 봐요.
      </Description>

      <CommunicateTitle>
        <img src="/icons/heartchat.svg" alt="heartchat_svg" />
        이웃에게 고마움을 표현해요
      </CommunicateTitle>
      <Description>
        <iframe
          width="326"
          height="183"
          src="https://www.youtube.com/embed/a3hmg0SomOw"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen></iframe>
        KBS News
      </Description>
      <Description>
        청주의 한 아파트에서는 "윗집을 칭찬합니다" 캠페인으로 층간 소음으로 힘들어하는 사례가 크게 줄었다고 해요. 윗집과 소통하며 어떻게 소음을 줄이려고
        노력하고 있고 그에 대해 감사하다는 칭찬을 통해 서로에 대한 이해를 높일 수 있었다고 하는데요. 서로에 대한 이해를 높이고 소음을 줄이려는 노력을 알게
        된다면 소음으로 인한 스트레스가 많이 줄어든다고 합니다. 사실 줄어든 건 층간 소음보다 서로에 대한 오해일 수도 있겠네요!
      </Description>
    </Fragment>
  );
};

export default ConnectWithNeighbours;
