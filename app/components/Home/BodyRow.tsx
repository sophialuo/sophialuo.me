"use client";

import React from "react";
import { useRouter } from "next/navigation";
import _ from "lodash";
import "./BodyRow.css";

const NUM_ITEMS = 10;

interface BodyRowProps {
  rowTitle: string;
}

// TODO: insert image to display
const tinkeringItems = [
  {
    path: "/ultimate-tic-tac-toe",
    name: "Ultimate Tic Tac Toe",
  },
];

const BodyRow: React.FC<BodyRowProps> = ({ rowTitle }) => {
  const router = useRouter();

  return (
    <div>
      <div className="header-title">{rowTitle}</div>
      <div className="items">
        {rowTitle === `TINKERING` &&
          tinkeringItems.map((item) => {
            const { path, name } = item;
            return (
              <div
                key={`${rowTitle}_${path}`}
                className="coming-soon-block"
                onClick={() => router.push(path)}
              >
                {name}
              </div>
            );
          })}
        {_.range(NUM_ITEMS).map((index: number) => {
          return (
            <div key={`${rowTitle}_${index}`} className="coming-soon-block">
              Coming soon!
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BodyRow;
