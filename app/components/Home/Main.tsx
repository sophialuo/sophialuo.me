import React from "react";
import IntroRow from "./IntroRow";
import BodyRow from "./BodyRow";
import "./Main.css";

const Main: React.FC = () => {
  return (
    <>
      <IntroRow />
      <div className="row-wrapper">
        <BodyRow rowTitle="TINKERING" />
        <BodyRow rowTitle="EXPRESSING" />
        <BodyRow rowTitle="THINKING" />
      </div>
    </>
  );
};

export default Main;
