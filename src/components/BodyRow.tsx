import React from "react";
import _ from "lodash";
import "./BodyRow.css";

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
