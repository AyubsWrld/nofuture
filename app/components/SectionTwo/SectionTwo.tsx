import React from "react";
import { ColumnOne } from "./ColumnOne";
import { ColumnTwo } from "./ColumnTwo";
import bentoImages from "./bento-images.svg";
import "./style.css";

export const SectionTwo = (): JSX.Element => {
  return (
    <div className="section-two">
      {/* <img className="bento-images" alt="Bento images" src={bentoImages} /> */}
      <div className="bento-details">
        <ColumnOne />
        <ColumnTwo />
      </div>
    </div>
  );
};
