import React, { useState, useEffect } from "react";

import Header from "../components/Header";

import Banner from "../UI/Banner";

import Bar from "../UI/Bar";

import { Tab } from "../UI/Tab";
import Consult from "../components/CS/Consult";
import ArbitrationRequest from "../components/CS/ArbitrationRequest";

function ComplaintApply() {
  return (
    <>
      <Header showRecord={false}>상담 신청</Header>
      <Banner />
      <Tab name_1="상담하기" name_2="중재요청" content_1={<Consult />} content_2={<ArbitrationRequest />}></Tab>
    </>
  );
}

export default ComplaintApply;
