import React from "react";
import ShockAbsorber from "./SolutionListPanel/ShockAbsorber";
import HomeAppliances from "./SolutionListPanel/HomeAppliances";
import Pets from "./SolutionListPanel/Pets";
import Music from "./SolutionListPanel/Music";
import Etc from "./SolutionListPanel/Etc";

export const tabs = [
  {
    title: "충격 소음",
    text: <ShockAbsorber />,
  },
  {
    title: "가전.가구",
    text: <HomeAppliances />,
  },
  {
    title: "반려동물",
    text: <Pets />,
  },
  {
    title: "음악",
    text: <Music />,
  },

  {
    title: "기타",
    text: <Etc />,
  },
];
