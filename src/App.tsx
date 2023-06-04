import React from "react";
import { IntroRow, BodyRow } from "./components";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="container">
        <IntroRow />
        <div className="row-wrapper">
          <BodyRow rowTitle="TINKERING" />
          <BodyRow rowTitle="EXPRESSING" />
          <BodyRow rowTitle="THINKING" />
        </div>
      </div>
    </div>
  );
};

export default App;
