import React, { Fragment } from "react";
import ReduceCard from "../../../UI/ReduceCard";
import { TagTemplate } from "../TagTemplate";

const Music = (props) => {
  const noise11Data = props.noise;
  const noise11Items = noise11Data.item;

  const parsed11Data = noise11Items.map((item) => ({
    subTitle: item.subTitle,
    content: item.content,
    img: item.img,
  }));

  return (
    <Fragment>
      <TagTemplate>#악기소리 #노래</TagTemplate>
      {parsed11Data.map((item, index) => {
        return (
          <ReduceCard key={index} icon={"/resources/piano.png"} iconTitle={"악기소리 줄이기"} img={item.img} title={item.subTitle} description={item.content} />
        );
      })}
    </Fragment>
  );
};

export default Music;
