import React from "react";
import Header from "../components/Header";
import styled from "styled-components";
import StoreList from "../components/ProductRecommend/StoreList";

const DUMMY_CARDS = [
  { title: "러그", description: "가구소리, 발소리 등 각종 생활 소음을 줄일 수 있어요", tags: { 1: "발소리", 2: "가구소리", 3: "말소리" } },
  { title: "슬리퍼", description: "바닥과 발 사이에 완충 역할을 하여 발소리를 줄여줘요", tags: { 1: "발소리" } },
  { title: "슬리퍼", description: "바닥과 발 사이에 완충 역할을 하여 발소리를 줄여줘요", tags: { 1: "발소리" } },
  { title: "슬리퍼", description: "바닥과 발 사이에 완충 역할을 하여 발소리를 줄여줘요", tags: { 1: "발소리" } },
  { title: "슬리퍼", description: "바닥과 발 사이에 완충 역할을 하여 발소리를 줄여줘요", tags: { 1: "발소리" } },
  { title: "슬리퍼", description: "바닥과 발 사이에 완충 역할을 하여 발소리를 줄여줘요", tags: { 1: "발소리" } },
  { title: "슬리퍼", description: "바닥과 발 사이에 완충 역할을 하여 발소리를 줄여줘요", tags: { 1: "발소리" } },
];

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

function Product() {
  return (
    <>
      <Header showRecord={false}>소음 방지 제품</Header>
      <ProductTitle>나와 이웃을 지키는 제품 추천</ProductTitle>
      <StoreList items={DUMMY_CARDS} />
    </>
  );
}

export default Product;
