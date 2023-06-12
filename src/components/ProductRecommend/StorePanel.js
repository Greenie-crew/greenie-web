import React, { useState, useEffect } from "react";
import Panel from "../../UI/Panel";
import StoreList from "./StoreList";
import { useNavigate } from "react-router-dom";
import axios from "axios";

//   { title: "러그", description: "가구소리, 발소리 등 각종 생활 소음을 줄일 수 있어요", tags: { 1: "발소리", 2: "가구소리", 3: "말소리" } },
//   { title: "슬리퍼", description: "바닥과 발 사이에 완충 역할을 하여 발소리를 줄여줘요", tags: { 1: "발소리" } },

const StorePanel = (props) => {
  const navigate = useNavigate();
  const [storeItems, setStoreItems] = useState([]);

  console.log("storeItems: " + storeItems);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://43.200.32.42:8080/api/product/list");
      const productCards = response.data.map((item) => ({
        description: item.description,
        imageUrl: item.imageUrl,
        productId: item.productId,
        productName: item.productName,
        hashTagName: item.hashTagName,
      }));
      setStoreItems(productCards);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  //   const StoreItemsContext = React.createContext();
  //   const StoreItemsProvider = ({ children, storeItems }) => {
  //     return <StoreItemsContext.Provider value={storeItems}>{children}</StoreItemsContext.Provider>;
  //   };

  const navigateToProduct = async () => {
    await fetchData();
    navigate("/product", { state: { storeItems } });
    window.scrollTo(0, 0); // 페이지 이동 후 스크롤을 상단으로 이동
  };

  return (
    <div style={{ paddingBottom: "20%" }}>
      <Panel showRecord={true} onClick={navigateToProduct}>
        노이즈 캔슬링 제품 어때요?
      </Panel>
      {/* <ShopList key={props.id} items={props.items} /> */}
      <StoreList items={storeItems} resource={props.resource[0]} />
    </div>
  );
};

export default StorePanel;
