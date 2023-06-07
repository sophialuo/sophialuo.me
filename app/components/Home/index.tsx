import React from "react";
import IntroRow from "./IntroRow";
import BodyRow from "./BodyRow";
import "./styles.css";

const Home: React.FC = () => {
  return (
    <div className="container">
      <IntroRow />
      <div className="row-wrapper">
        <BodyRow rowTitle="TINKERING" />
        <BodyRow rowTitle="EXPRESSING" />
        <BodyRow rowTitle="THINKING" />
      </div>
    </div>
  );
};

export default Home;
