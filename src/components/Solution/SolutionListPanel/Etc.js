import React, { Fragment } from "react";
import ReduceCard from "../../../UI/ReduceCard";
import { TagTemplate } from "../TagTemplate";

const Etc = (props) => {
  return (
    <Fragment>
      <TagTemplate>#음성어 #생리적소음 #자연현상 #교통소음 #기타생활소리 #기타</TagTemplate>
      <ReduceCard></ReduceCard>
    </Fragment>
  );
};

export default Etc;
