import React, { Fragment } from "react";
import ReduceCard from "../../../UI/ReduceCard";
import { TagTemplate } from "../TagTemplate";

const Etc = (props) => {
  const noise20Data = props.noise;
  const noise20Items = noise20Data.item;

  const parsed20Data = noise20Items.map((item) => ({
    subTitle: item.subTitle,
    content: item.content,
    img: item.img,
  }));

  return (
    <Fragment>
      <TagTemplate>#음성어 #생리적소음 #자연현상 #교통소음 #기타생활소리 #기타</TagTemplate>
      {parsed20Data.map((item, index) => {
        return (
          <ReduceCard
            key={index}
            icon={"/resources/other.png"}
            iconTitle={"기타 생활소음 줄이기"}
            img={item.img}
            title={item.subTitle}
            description={item.content}
          />
        );
      })}
    </Fragment>
  );
};

export default Etc;
