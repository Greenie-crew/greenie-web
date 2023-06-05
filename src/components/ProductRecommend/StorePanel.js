import React, { useState } from "react";
import Panel from "../../UI/Panel";
import StoreList from "./StoreList";
import { useNavigate } from "react-router-dom";

const DUMMY_CARDS = [
  { title: "러그", description: "가구소리, 발소리 등 각종 생활 소음을 줄일 수 있어요", tags: { 1: "발소리", 2: "가구소리", 3: "말소리" } },
  { title: "슬리퍼", description: "바닥과 발 사이에 완충 역할을 하여 발소리를 줄여줘요", tags: { 1: "발소리" } },
];

const ResourcesPanel = (props) => {
  const navigate = useNavigate();

  const navigateToProduct = () => {
    navigate("/product");
    window.scrollTo(0, 0); // 페이지 이동 후 스크롤을 상단으로 이동
  };
  const [storeItems, setStoreItems] = useState(DUMMY_CARDS);

  return (
    <div style={{ paddingBottom: "20%" }}>
      <Panel showRecord={true} onClick={navigateToProduct}>
        노이즈 캔슬링 제품 어때요?
      </Panel>
      {/* <ShopList key={props.id} items={props.items} /> */}
      <StoreList items={storeItems} />
    </div>
  );
};

export default ResourcesPanel;
