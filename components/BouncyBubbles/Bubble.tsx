"use client";

import _ from "lodash";
import React from "react";
import "./styles.css";

export interface BubbleProps {
  top: number;
  left: number;
  width: number;
  height: number;
  position?: "static" | "relative" | "absolute" | "sticky" | "fixed";
  bubbleDelay?: number;
  animationKeyframe?: string;
  animationTime?: number;
}

const BUFFER = 4;

const getAnimationVars = ({
  top,
  height,
  bubbleDelay,
  animationKeyframe,
  animationTime,
}: {
  top: number;
  height: number;
  bubbleDelay?: number;
  animationKeyframe?: string;
  animationTime?: number;
}) => {
  if (top >= 0 && top - BUFFER < height) {
    return {
      "--bounceHeight": `-${Math.abs(top - BUFFER)}px`,
      "--bubbleDelay": `${bubbleDelay ?? 0}s`,
      "--animationKeyframe": `${animationKeyframe ?? "float"}`,
      "--animationTime": `${animationTime ?? 6}s`,
    };
  } else {
    return {
      "--bounceHeight": `-${height}px`,
      "--bubbleDelay": `${bubbleDelay ?? 0}s`,
      "--animationKeyframe": `${animationKeyframe ?? "float"}`,
      "--animationTime": `${animationTime ?? 6}s`,
    };
  }
};
const Bubble: React.FC<BubbleProps> = ({
  top,
  left,
  width,
  height,
  position,
  bubbleDelay,
  animationKeyframe,
  animationTime,
}) => {
  return (
    <div
      className="secondary bubble"
      style={{
        position: position ?? "absolute",
        top,
        left,
        width,
        height,
        ...getAnimationVars({
          top,
          height,
          bubbleDelay,
          animationKeyframe,
          animationTime,
        }),
      }}
    ></div>
  );
};

export default Bubble;
