"use client";

import _ from "lodash";
import React from "react";
import IntroRow from "./IntroRow";
import BodyRow from "./BodyRow";
import {
  DefaultPreview,
  UltimateTicTacToePreview,
  BouncyBubbles,
  Art,
} from "./Preview";
import { IMAGE_DATA } from "../ArtGallery";

import "./styles.css";

const NUM_ITEMS = 10;

const tinkeringItems = [
  <UltimateTicTacToePreview key="ultimate-tic-tac-toe-preview" />,
  <BouncyBubbles key="bouncy-bubbles-preview" />,
];

const expressingItems = IMAGE_DATA.map((item) => (
  <Art
    key={item.url}
    imgUrl={item.url}
    formattingStyle={item.formattingStyle}
  />
));

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
          rowItems={expressingItems.map((element: React.JSX.Element) => {
            return element;
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
