import React, { Fragment } from "react";
import ReduceCard from "../../../UI/ReduceCard";
import { TagTemplate } from "../TagTemplate";

const HomeAppliances = (props) => {
  return (
    <Fragment>
      <TagTemplate>#기계소리 #가구소리 #가전기구</TagTemplate>
      <ReduceCard></ReduceCard>
    </Fragment>
  );
};

export default HomeAppliances;
