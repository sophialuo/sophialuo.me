import _ from "lodash";
import React from "react";

import { MousePos } from "../../hooks/types";
import { getAdjustedDim } from "./helpers";

import "./styles.css";

interface DragBoxProps {
  startPos: MousePos | undefined;
  curPos: MousePos | undefined;
  ovalAllowed: boolean;
  isDragging: boolean;
}

const DragBox: React.FC<DragBoxProps> = ({
  startPos,
  curPos,
  ovalAllowed,
  isDragging,
}) => {
  if (!startPos || !curPos || !isDragging) {
    return null;
  }
  return (
    <div
      style={{
        zIndex: 1,
        position: "absolute",
        borderStyle: "dashed",
        color: "black",
        top: Math.min(startPos.y, curPos.y),
        left: Math.min(startPos.x, curPos.x),
        width: getAdjustedDim(ovalAllowed, startPos, curPos).width,
        height: getAdjustedDim(ovalAllowed, startPos, curPos).height,
      }}
    ></div>
  );
};

export default DragBox;
