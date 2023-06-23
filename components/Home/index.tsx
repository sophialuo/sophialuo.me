"use client";

import _ from "lodash";
import React from "react";
import IntroRow from "./IntroRow";
import BodyRow from "./BodyRow";
import {
  DefaultPreview,
  UltimateTicTacToePreview,
  BouncyBubbles,
} from "./Preview";

import "./styles.css";

const NUM_ITEMS = 10;

const tinkeringItems = [<UltimateTicTacToePreview />, <BouncyBubbles />];

const Home: React.FC = () => {
  return (
    <div className="container">
      <IntroRow />
      <div className="row-wrapper">
        <BodyRow
          rowTitle="TINKERING"
          rowItems={_.range(NUM_ITEMS).map((index: number) => {
            if (tinkeringItems[index]) {
              return tinkeringItems[index];
            }
            return <DefaultPreview key={`TINKERING${index}`} />;
          })}
        />
        <BodyRow
          rowTitle="EXPRESSING"
          rowItems={_.range(NUM_ITEMS).map((index: number) => {
            return <DefaultPreview key={`EXPRESSING${index}`} />;
          })}
        />
        <BodyRow
          rowTitle="THINKING"
          rowItems={_.range(NUM_ITEMS).map((index: number) => {
            return <DefaultPreview key={`THINKING${index}`} />;
          })}
        />
      </div>
    </div>
  );
};

export default Home;
