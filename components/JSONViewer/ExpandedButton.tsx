"use client";

import _ from "lodash";
import React from "react";
import "./styles.css";

const ExpandedButton: React.FC<{ setExpanded: (val: boolean) => void }> = ({
  setExpanded,
}) => {
  return (
    <button className="json-button color-1" onClick={() => setExpanded(false)}>
      {"▼"}
    </button>
  );
};

export default ExpandedButton;
