import React from "react";
import _ from "lodash";
import "./BodyRow.css";

interface BodyRowProps {
  rowTitle: string;
  rowText: string;
  rowItems: React.JSX.Element[];
}

const BodyRow: React.FC<BodyRowProps> = ({ rowTitle, rowItems, rowText }) => {
  return (
    <div>
      <div className="row-header">
        <div className="row-header-title">{rowTitle}</div>
        <div className="row-header-text">{rowText}</div>
      </div>
      <div className="items">{rowItems.map((item) => item)}</div>
    </div>
  );
};

export default BodyRow;
