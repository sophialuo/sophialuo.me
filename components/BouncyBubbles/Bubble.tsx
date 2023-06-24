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

const BUFFER = 4;

const getAnimationVars = ({ top, height }: { top: number; height: number }) => {
  if (top - BUFFER < height) {
    return {
      "--bounceHeight": `-${top - BUFFER}px`,
    };
  } else {
    return {
      "--bounceHeight": `-${height}px`,
    };
  }
};
const Bubble: React.FC<BubbleProps> = ({ top, left, width, height }) => {
  return (
    <div
      className="secondary bubble"
      style={{
        position: "absolute",
        top,
        left,
        width,
        height,
        ...getAnimationVars({ top, height }),
      }}
    ></div>
  );
};

export default Bubble;
