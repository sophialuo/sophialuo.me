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
import { GALLERY_IMAGE_DATA } from "../ArtGallery";

import "./styles.css";

const NUM_ITEMS = 5;

const tinkeringItems = [
  <UltimateTicTacToePreview key="ultimate-tic-tac-toe-preview" />,
  <BouncyBubbles key="bouncy-bubbles-preview" />,
];

const expressingItems = GALLERY_IMAGE_DATA.map((item) => (
  <Art
    key={item.url}
    imgUrl={item.url}
    formattingStyle={item.formattingStyle}
    title={item.title}
  />
));

const Home: React.FC = () => {
  return (
    <div className="container">
      <IntroRow />
      <div className="row-wrapper">
        <BodyRow
          rowTitle="TINKERING"
          rowText="I like to build fun things sometimes"
          rowItems={_.range(NUM_ITEMS).map((index: number) => {
            if (tinkeringItems[index]) {
              return tinkeringItems[index];
            }
            return <DefaultPreview key={`TINKERING${index}`} />;
          })}
        />
        <BodyRow
          rowTitle="EXPRESSING"
          rowText="Making art stuff is also pretty fun"
          rowItems={expressingItems.map((element: React.JSX.Element) => {
            return element;
          })}
        />
        <BodyRow
          rowTitle="THINKING"
          rowText="One day, I write some thoughts down and put them here."
          rowItems={_.range(NUM_ITEMS).map((index: number) => {
            return <DefaultPreview key={`THINKING${index}`} />;
          })}
        />
      </div>
    </div>
  );
};

export default Home;
