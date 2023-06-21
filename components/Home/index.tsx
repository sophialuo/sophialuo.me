"use client";

import _ from "lodash";
import React from "react";
import IntroRow from "./IntroRow";
import BodyRow from "./BodyRow";
import { useRouter } from "next/navigation";

import "./styles.css";

const NUM_ITEMS = 10;

const tinkeringItems = [
  {
    path: "/ultimate-tic-tac-toe",
    name: "Ultimate Tic Tac Toe",
  },
];

const RowItemPreview: React.FC<{
  itemProps?: { path: string; name: string };
}> = ({ itemProps }) => {
  const router = useRouter();

  return (
    <div
      className="coming-soon-block"
      onClick={() => {
        if (itemProps?.path) {
          router.push(itemProps.path);
        }
      }}
    >
      {itemProps?.name ?? "Coming Soon"}
    </div>
  );
};

const Home: React.FC = () => {
  return (
    <div className="container">
      <IntroRow />
      <div className="row-wrapper">
        <BodyRow
          rowTitle="TINKERING"
          rowItems={_.range(NUM_ITEMS).map((index: number) => {
            return (
              <RowItemPreview
                key={`TINKERING${index}`}
                itemProps={tinkeringItems[index]}
              />
            );
          })}
        />
        <BodyRow
          rowTitle="EXPRESSING"
          rowItems={_.range(NUM_ITEMS).map((index: number) => {
            return <RowItemPreview key={`EXPRESSING${index}`} />;
          })}
        />
        <BodyRow
          rowTitle="THINKING"
          rowItems={_.range(NUM_ITEMS).map((index: number) => {
            return <RowItemPreview key={`THINKING${index}`} />;
          })}
        />
      </div>
    </div>
  );
};

export default Home;
