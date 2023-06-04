import React from "react";
import _ from "lodash";
import "./BodyRow.css";

// TODO make this generalizable so that can feed in list of items and header title
const HEADER_TITLE = "TINKERING";
const NUM_ITEMS = 10;

interface BodyRowProps {
  rowTitle: string;
}

const BodyRow: React.FC<BodyRowProps> = ({ rowTitle }) => {
  return (
    <div>
      <div className="header-title">{rowTitle}</div>
      <div className="items">
        {_.range(NUM_ITEMS).map((index: number) => {
          return (
            <div key={`${HEADER_TITLE}_${index}`} className="coming-soon-block">
              Coming soon!
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BodyRow;
