import React, { Fragment, useState, useEffect } from "react";
import Header from "../components/Header";
import styled from "styled-components";
import StoreItem from "../components/ProductRecommend/StoreItem";
import axios from "axios";
// import { useLocation } from "react-router-dom";

// const DUMMY_CARDS = [
//   { title: "러그", description: "가구소리, 발소리 등 각종 생활 소음을 줄일 수 있어요", tags: { 1: "발소리", 2: "가구소리", 3: "말소리" } },
//   { title: "슬리퍼", description: "바닥과 발 사이에 완충 역할을 하여 발소리를 줄여줘요", tags: { 1: "발소리" } },
//   { title: "슬리퍼", description: "바닥과 발 사이에 완충 역할을 하여 발소리를 줄여줘요", tags: { 1: "발소리" } },
//   { title: "슬리퍼", description: "바닥과 발 사이에 완충 역할을 하여 발소리를 줄여줘요", tags: { 1: "발소리" } },
//   { title: "슬리퍼", description: "바닥과 발 사이에 완충 역할을 하여 발소리를 줄여줘요", tags: { 1: "발소리" } },
//   { title: "슬리퍼", description: "바닥과 발 사이에 완충 역할을 하여 발소리를 줄여줘요", tags: { 1: "발소리" } },
//   { title: "슬리퍼", description: "바닥과 발 사이에 완충 역할을 하여 발소리를 줄여줘요", tags: { 1: "발소리" } },
// ];

const ProductTitle = styled.div`
  background-color: #ffffff;
  font-weight: 600;
  list-style: none;
  height: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
  padding: 0;
  margin-top: 24px;
  margin-left: 16px;
  margin-bottom: 13px;
`;

const Listitem = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* 한 줄에 두 개의 컬럼을 생성 */
  grid-gap: 5px; /* 컬럼 사이의 간격 설정 */
  align-items: center;
  justify-content: center;
`;

function Product(props) {
  //   const location = useLocation();
  //   const storeItems = location.state?.storeItems || [];

  //   console.log("storeItems: d흐흐흐  " + JSON.stringify(storeItems));

  const [storeItems, setStoreItems] = useState([]);

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

  return (
    <Fragment>
      <Header showRecord={false}>소음 방지 제품</Header>
      <ProductTitle>나와 이웃을 지키는 제품 추천</ProductTitle>
      <Listitem>
        {storeItems && storeItems.length > 0 ? (
          storeItems.map((album, index) => (
            <StoreItem
              key={index}
              img={album.imageUrl}
              title={album.productName}
              description={album.description}
              tags={album.hashTagName.map((tag) => Object.values(tag)[0])}
            />
          ))
        ) : (
          <p>상품이 존재하지 않습니다.</p>
        )}
      </Listitem>
    </Fragment>
  );
}

export default Product;
