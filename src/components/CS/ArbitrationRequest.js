import React from "react";
import { CSManager } from "./CSManager";
import Bar from "../../UI/Bar";
import CSBoard from "./CSBoard";

const ArbitrationRequest = (props) => {
  const title = "상담을 통해 해결하려 했음에도 문제가 해결되지 않으셨나요?";
  const description = (
    <>
      아니면 소음으로 인해 금전적인 손해를 입으셨나요?
      <br />
      그렇다면 아래 위원회를 통해 중재를 요청할 수 있어요.
    </>
  );
  const imageCount = 1;

  return (
    <>
      <CSManager title={title} description={description} />
      <Bar />
      <CSBoard
        title="서울시 환경분쟁 조정위원회"
        description="서울특별시에서 운영하는 위원회로 시민들이 생활 속에서 부딪히는 크고 작은 환경 분쟁을 복잡한 소송 절차를 거치지 않고 전문성을 가진 행정기관에서 신속히 해결하기 위해 만들어졌습니다. 층간 소음, 공사장 소음, 도로 소음 이외에도 기타 환경 오염에 관한 분쟁 또한 접수가 가능합니다. 홈페이지에 분정 조정 사례가 자세히 나와있습니다.
        "
        imageCount={imageCount}
        site="https://edc.seoul.go.kr/"
      />
      <CSBoard
        title="중앙환경분쟁 조정위원회"
        description="환경부에서 운영하는 위원회로 환경 분쟁을 신속·공정하고 효율적으로 해결하여 환경을 보전하고 국민의 건강 및 재산상의 피해를 구제하는 데 도움을 주고 있습니다.
        중앙환경분쟁조정위원회는 주로 국가 또는 지방 자치 단체를 대상으로 하거나 둘 이상의 시/도의 관할 구역에 걸치는 분쟁, 지방환경 분쟁위원회가 조정하기 어려워 이송한 분쟁을 담당합니다. 지방 환경 분쟁 조정 위원회에서 조정하기 어려운 사례를 중심으로 조정합니다. 
         "
        imageCount={imageCount}
        site="http://www.noiseinfo.or.kr"
      />
    </>
  );
};

export default ArbitrationRequest;
