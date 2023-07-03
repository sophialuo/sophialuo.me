"use client";

import _ from "lodash";
import React from "react";
import "./styles.css";

const CollapsedButton: React.FC<{ setExpanded: (val: boolean) => void }> = ({
  setExpanded,
}) => {
  return (
    <button className="json-button color-1" onClick={() => setExpanded(true)}>
      {"▶"}
    </button>
  );
};

export default CollapsedButton;
