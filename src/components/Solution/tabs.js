import React from "react";
import ShockAbsorber from "./SolutionListPanel/ShockAbsorber";
import HomeAppliances from "./SolutionListPanel/HomeAppliances";
import Pets from "./SolutionListPanel/Pets";
import Music from "./SolutionListPanel/Music";
import Etc from "./SolutionListPanel/Etc";
import axios from "axios";

const fetchData = async () => {
  try {
    const response = await axios.get("http://43.200.32.42:8080/api/noise/list");

    const noise7Data = response.data.find((item) => item.noiseId === 7);
    const noise8Data = response.data.find((item) => item.noiseId === 8);
    const noise13Data = response.data.find((item) => item.noiseId === 13);
    const noise14Data = response.data.find((item) => item.noiseId === 14);
    const noise10Data = response.data.find((item) => item.noiseId === 10);
    const noise11Data = response.data.find((item) => item.noiseId === 11);
    const noise20Data = response.data.find((item) => item.noiseId === 20);
    return { noise7Data, noise8Data, noise13Data, noise14Data, noise10Data, noise11Data, noise20Data }; // noise7Data와 noise8Data를 반환
  } catch (error) {
    console.error(error);
  }
};
const data = await fetchData();
const { noise7Data, noise8Data, noise13Data, noise14Data, noise10Data, noise11Data, noise20Data } = data;

export const tabs = [
  {
    title: "충격 소음",
    text: <ShockAbsorber noise={{ noise7Data, noise8Data }} />,
  },
  {
    title: "가전.가구",
    text: <HomeAppliances noise={{ noise13Data, noise14Data }} />,
  },
  {
    title: "반려동물",
    text: <Pets noise={noise10Data} />,
  },
  {
    title: "음악",
    text: <Music noise={noise11Data} />,
  },
  {
    title: "기타",
    text: <Etc noise={noise20Data} />,
  },
];
