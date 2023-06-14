import React, { Fragment } from "react";
import ReduceCard from "../../../UI/ReduceCard";
import { TagTemplate } from "../TagTemplate";

const ShockAbsorber = (props) => {
  const { noise7Data, noise8Data } = props.noise;
  const noise7Items = noise7Data.item;
  const noise8Items = noise8Data.item;

  const parsed7Data = noise7Items.map((item) => ({
    subTitle: item.subTitle,
    content: item.content,
    img: item.img,
  }));

  const parsed8Data = noise8Items.map((item) => ({
    subTitle: item.subTitle,
    content: item.content,
    img: item.img,
  }));

  return (
    <Fragment>
      <TagTemplate>#발소리 #부딪히는소리 #강하게 부딪히는소리 #폭발음 #공구질 </TagTemplate>
      {parsed7Data.map((item, index) => {
        if (index === 0) {
          return (
            <ReduceCard
              key={index}
              icon={"/resources/footstep.png"}
              iconTitle={"발소리 줄이기"}
              img={item.img}
              title={item.subTitle}
              description={item.content}
            />
          );
        } else {
          return <ReduceCard key={index} img={item.img} title={item.subTitle} description={item.content} />;
        }
      })}
      {parsed8Data.map((item, index) => (
        <ReduceCard
          key={index}
          icon={"/resources/stronghammer.png"}
          iconTitle={"공구소리 줄이기"}
          img={item.img}
          title={item.subTitle}
          description={item.content}
        />
      ))}
    </Fragment>
  );
};

export default ShockAbsorber;
