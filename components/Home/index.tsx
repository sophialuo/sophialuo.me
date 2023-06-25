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

import "./styles.css";

const NUM_ITEMS = 10;

const tinkeringItems = [
  <UltimateTicTacToePreview key="ultimate-tic-tac-toe-preview" />,
  <BouncyBubbles key="bouncy-bubbles-preview" />,
];

const expressingItems = [
  {
    url: "https://live.staticflickr.com/567/21603103036_a4df0078b7_b.jpg",
    formattingStyle: 0,
  },
  {
    url: "https://live.staticflickr.com/738/21629342585_93c7ddfd3f_b.jpg",
    formattingStyle: 0,
  },
  {
    url: "https://live.staticflickr.com/659/21441227690_eb0e8b1a2e_b.jpg",
    formattingStyle: 0,
  },
  {
    url: "https://live.staticflickr.com/677/21442317899_b101521fcc_b.jpg",
    formattingStyle: 0,
  },
  {
    url: "https://live.staticflickr.com/5685/21442314589_aa3bee5a2c_b.jpg",
    formattingStyle: 0,
  },
  {
    url: "https://live.staticflickr.com/652/21442326179_1eebeb1aba_c.jpg",
    formattingStyle: 1,
  },
  {
    url: "https://live.staticflickr.com/5803/21008140513_67f55d75a1_c.jpg",
    formattingStyle: 1,
  },
  {
    url: "https://live.staticflickr.com/640/22214509858_8816e980e5_c.jpg",
    formattingStyle: 2,
  },
  {
    url: "https://live.staticflickr.com/590/21629331725_a5cf0eb0ed_c.jpg",
    formattingStyle: 1,
  },
  {
    url: "https://live.staticflickr.com/764/21008125593_1aed8d0187_c.jpg",
    formattingStyle: 1,
  },
  {
    url: "https://live.staticflickr.com/683/21629323515_0349f3b2f4_c.jpg",
    formattingStyle: 1,
  },
  {
    url: "https://live.staticflickr.com/770/21560102359_fdfb4ffbab_h.jpg",
    formattingStyle: 0,
  },
  {
    url: "https://live.staticflickr.com/759/21560085799_2781cded43_h.jpg",
    formattingStyle: 0,
  },
  {
    url: "https://live.staticflickr.com/672/21559090958_1fe7d804ff_c.jpg",
    formattingStyle: 1,
  },
  {
    url: "https://live.staticflickr.com/5798/21124342394_b78cebd2a8_c.jpg",
    formattingStyle: 1,
  },
  {
    url: "https://live.staticflickr.com/603/21124278294_5c77bc9534_b.jpg",
    formattingStyle: 0,
  },
  {
    url: "https://live.staticflickr.com/569/21560091139_1a3ecd22f6_c.jpg",
    formattingStyle: 1,
  },
  {
    url: "https://live.staticflickr.com/574/21442312899_9af08e2443_c.jpg",
    formattingStyle: 1,
  },
].map((item) => (
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
