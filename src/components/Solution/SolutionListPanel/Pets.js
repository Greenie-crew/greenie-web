import React, { Fragment } from "react";
import ReduceCard from "../../../UI/ReduceCard";
import { TagTemplate } from "../TagTemplate";

const Pets = (props) => {
  const noise10Data = props.noise;
  const noise10Items = noise10Data.item;

  const firstContentUrl = noise10Items[0].contentUrl;
  const secondContentUrl = noise10Items[1].contentUrl;

  const parsed10Data = noise10Items.map((item) => ({
    subTitle: item.subTitle,
    content: item.content,
    contentUrl: item.contentUrl.map((link) => link[0]),
    img: item.img,
  }));

  console.log("videoURL :  " + JSON.stringify(firstContentUrl[1]));

  return (
    <Fragment>
      <TagTemplate>#반려동물소리 #기타동물소리</TagTemplate>
      {parsed10Data.map((item, index) => {
        // const videoUrls = item.contentUrl.map((urlObject) => Object.values(urlObject)[0]);
        if (index === 0) {
          return (
            <ReduceCard
              key={index}
              icon={"/resources/pets.png"}
              iconTitle={"반려동물소리 줄이기"}
              img={item.img}
              title={item.subTitle}
              description={item.content}
            />
          );
        } else if (index === 1) {
          return <ReduceCard key={index} video={firstContentUrl[0][0]} title={"강아지 스트레스 해결법"} description={"도람터 doramter"} />;
        }
      })}
      <ReduceCard video={"https://www.youtube.com/watch?v=BUAfaz8_InQ"} title={"강아지 이사 스트레스, 줄이는 방법이 있나요?"} description={"강형욱의 보듬TV"} />
      <ReduceCard img={noise10Items[1].img} title={noise10Items[1].subTitle} description={noise10Items[1].content} />
      <ReduceCard video={secondContentUrl[0][0]} title={"분리불안이 심한 반려견 교육 | 반려견 기초 상식"} description={"강형욱의 보듬TV"} />
    </Fragment>
  );
};

export default Pets;
