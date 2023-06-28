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

const tinkeringItems = [
  <UltimateTicTacToePreview key="ultimate-tic-tac-toe-preview" />,
  <BouncyBubbles key="bouncy-bubbles-preview" />,
];

const NUM_ART_TO_SHOW = 5;
const expressingItems = GALLERY_IMAGE_DATA.slice(0, NUM_ART_TO_SHOW + 1).map(
  (item, index) => {
    if (index === NUM_ART_TO_SHOW) {
      return (
        <Art key={"view-more"} imgUrl={""} formattingStyle={0} title={""} />
      );
    }
    return (
      <Art
        key={item.url}
        imgUrl={item.url}
        formattingStyle={item.formattingStyle}
        title={item.title}
      />
    );
  }
);

const Home: React.FC = () => {
  return (
    <div className="container">
      <IntroRow />
      <div className="row-wrapper">
        <BodyRow
          rowTitle="TINKERING"
          rowText="I like to build fun things sometimes"
          rowItems={_.range(3).map((index: number) => {
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
          rowText="One day, I will write some thoughts down and put them here."
          rowItems={_.range(1).map((index: number) => {
            return <DefaultPreview key={`THINKING${index}`} />;
          })}
        />
      </div>
    </div>
  );
};

export default Home;
