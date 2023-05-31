import React, { useState } from "react";
import Panel from "../../UI/Panel";
import StoreList from "./StoreList";

const DUMMY_CARDS = [
  { title: "제로 소음 힐링" },
  { title: "청력 건강 지키기" },
  { title: "멘탈 회복하는 법" },
  { title: "title1" },
  { title: "title2" },
  { title: "title3" },
  { title: "title4" },
];

const ResourcesPanel = (props) => {
  const [storeItems, setStoreItems] = useState(DUMMY_CARDS);
  return (
    <div style={{ paddingBottom: "20%" }}>
      <Panel>노이즈 캔슬링 제품 어때요?</Panel>
      {/* <ShopList key={props.id} items={props.items} /> */}
      <StoreList items={storeItems} />
    </div>
  );
};

export default ResourcesPanel;
