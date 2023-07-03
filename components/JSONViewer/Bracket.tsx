"use client";

import _ from "lodash";
import React from "react";
import "./styles.css";

const Bracket: React.FC<{ open: boolean; isHardBracket: boolean }> = ({
  open,
  isHardBracket,
}) => {
  if (open) {
    return <span className="color-1">{`${isHardBracket ? "[" : "{"}`}</span>;
  } else {
    return <span className="color-1">{`${isHardBracket ? "]" : "}"}`}</span>;
  }
};

export default Bracket;
