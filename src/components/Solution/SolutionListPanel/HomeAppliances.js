import React, { Fragment } from "react";
import ReduceCard from "../../../UI/ReduceCard";
import { TagTemplate } from "../TagTemplate";

const HomeAppliances = (props) => {
  const { noise13Data, noise14Data } = props.noise;
  const noise13Items = noise13Data.item;
  const noise14Items = noise14Data.item;

  const parsed13Data = noise13Items.map((item) => ({
    subTitle: item.subTitle,
    content: item.content,
    img: item.img,
  }));

  const parsed14Data = noise14Items.map((item) => ({
    subTitle: item.subTitle,
    content: item.content,
    img: item.img,
  }));

  return (
    <Fragment>
      <TagTemplate>#기계소리 #가구소리 #가전기구</TagTemplate>
      {parsed14Data.map((item, index) => {
        if (index === 0) {
          return (
            <ReduceCard
              key={index}
              icon={"/resources/washing-machine.png"}
              iconTitle={"가전소리 줄이기"}
              img={item.img}
              title={item.subTitle}
              description={item.content}
            />
          );
        } else {
          return <ReduceCard key={index} img={item.img} title={item.subTitle} description={item.content} />;
        }
      })}

      {parsed13Data.map((item, index) => (
        <ReduceCard
          key={index}
          icon={"/resources/dining-table.png"}
          iconTitle={"가구소리 줄이기"}
          img={item.img}
          title={item.subTitle}
          description={item.content}
        />
      ))}
    </Fragment>
  );
};

export default HomeAppliances;
