"use client";

import _ from "lodash";
import React from "react";
import "./styles.css";

interface BubbleProps {
  top: number;
  left: number;
  width: number;
  height: number;
}

const Bubble: React.FC<BubbleProps> = ({ top, left, width, height }) => {
  return <div className="bubble" style={{ top, left, width, height }}></div>;
};

export default Bubble;
