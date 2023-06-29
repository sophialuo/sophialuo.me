"use client";

import _ from "lodash";
import React from "react";
import IntroRow from "./IntroRow";
import BodyRow from "./BodyRow";
import {
  DefaultPreview,
  UltimateTicTacToePreview,
  BouncyBubblesPreview,
  ArtPreview,
  ExternalLinkPreview,
} from "./Preview";
import { GALLERY_IMAGE_DATA } from "../ArtGallery";

import "./styles.css";

// what to show in tinkering
const tinkeringItems = [
  <UltimateTicTacToePreview key="ultimate-tic-tac-toe-preview" />,
  <BouncyBubblesPreview key="bouncy-bubbles-preview" />,
];

// what to show in expressing
const NUM_ART_TO_SHOW = 5;
const expressingItems = GALLERY_IMAGE_DATA.slice(0, NUM_ART_TO_SHOW + 1).map(
  (item, index) => {
    if (index === NUM_ART_TO_SHOW) {
      return (
        <ArtPreview
          key={"view-more"}
          imgUrl={""}
          formattingStyle={0}
          title={""}
        />
      );
    }
    return (
      <ArtPreview
        key={item.url}
        imgUrl={item.url}
        formattingStyle={item.formattingStyle}
        title={item.title}
      />
    );
  }
);

// what to show in thinking
const thinkingItems = [
  <ExternalLinkPreview
    imagePath="/why_i_joined_scale.png"
    altName="why_i_joined_scale"
    externalLink="https://scale.com/blog/why-I-joined-scale-sophia"
    width={340}
    height={250}
  />,
];

const Home: React.FC = () => {
  return (
    <div className="container">
      <IntroRow />
      <div className="row-wrapper">
        <BodyRow
          rowTitle="TINKERING"
          rowText="I like to build fun things sometimes."
          rowItems={_.range(tinkeringItems.length + 1).map((index: number) => {
            if (tinkeringItems[index]) {
              return tinkeringItems[index];
            }
            return <DefaultPreview key={`TINKERING${index}`} />;
          })}
        />
        <BodyRow
          rowTitle="THINKING"
          rowText="One day, I will write some thoughts down and put them here."
          rowItems={_.range(thinkingItems.length + 1).map((index: number) => {
            if (thinkingItems[index]) {
              return thinkingItems[index];
            }
            return <DefaultPreview key={`THINKING${index}`} />;
          })}
        />
        <BodyRow
          rowTitle="EXPRESSING"
          rowText="Making art stuff is also pretty fun."
          rowItems={expressingItems.map((element: React.JSX.Element) => {
            return element;
          })}
        />
      </div>
    </div>
  );
};

export default Home;
