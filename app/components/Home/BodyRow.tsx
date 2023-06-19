import React from "react";
import _ from "lodash";
import "./BodyRow.css";

interface BodyRowProps {
  rowTitle: string;
  rowItems: React.JSX.Element[];
}

const BodyRow: React.FC<BodyRowProps> = ({ rowTitle, rowItems }) => {
  return (
    <div>
      <div className="header-title">{rowTitle}</div>
      <div className="items">{rowItems.map((item) => item)}</div>
    </div>
  );
};

export default BodyRow;
