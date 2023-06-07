import React, { Fragment } from "react";
import ReduceCard from "../../../UI/ReduceCard";
import { TagTemplate } from "../TagTemplate";

const Pets = (props) => {
  return (
    <Fragment>
      <TagTemplate>#반려동물소리 #기타동물소리</TagTemplate>
      <ReduceCard></ReduceCard>
    </Fragment>
  );
};

export default Pets;
