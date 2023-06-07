import React, { Fragment } from "react";
import ReduceCard from "../../../UI/ReduceCard";
import { TagTemplate } from "../TagTemplate";

const Music = (props) => {
  return (
    <Fragment>
      <TagTemplate>#악기소리 #노래</TagTemplate>
      <ReduceCard></ReduceCard>
    </Fragment>
  );
};

export default Music;
