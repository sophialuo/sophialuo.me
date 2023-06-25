"use client";

import _ from "lodash";
import React, { useState, useCallback } from "react";

import { useMouseDrag } from "../../hooks";
import { MousePos } from "../../hooks/types";
import { getAdjustedDim } from "./helpers";
import Bubble from "./Bubble";
import Header from "./Header";
import DragBox from "./DragBox";
import Footer from "./Footer";
import Warning from "./Warning";
import "./styles.css";

const BouncyBubbles: React.FC = () => {
  const [bubbles, setBubbles] = useState<React.JSX.Element[]>([]);
  const [ovalAllowed, setOvalAllowed] = useState<boolean>(false);
  const [openSnackbar, setOpenSnackbar] = useState<boolean>(false);

  const addBubble = useCallback(
    (
      bubbleStartPos: MousePos | undefined,
      bubbleEndPos: MousePos | undefined
    ) => {
      if (!bubbleStartPos || !bubbleEndPos) {
        return;
      }

      const newBubbles = bubbles;
      const { width, height } = getAdjustedDim(
        ovalAllowed,
        bubbleStartPos,
        bubbleEndPos
      );
      newBubbles.push(
        <Bubble
          key={`bubble-${bubbles.length}`}
          top={Math.min(bubbleStartPos.y, bubbleEndPos.y)}
          left={Math.min(bubbleStartPos.x, bubbleEndPos.x)}
          width={width}
          height={height}
        />
      );
      setBubbles(newBubbles);
    },
    [bubbles, ovalAllowed, setBubbles]
  );

  const {
    handleReset: handleDragReset,
    message,
    startPos,
    curPos,
    isDragging,
  } = useMouseDrag({
    minXDiff: 50,
    minYDiff: 50,
    maxXDiff: 400,
    maxYDiff: 400,
    validBounds:
      typeof window !== "undefined"
        ? document
            ?.getElementsByClassName("background")?.[0]
            ?.getBoundingClientRect()
        : undefined,
    onMouseUp: addBubble,
  });

  const handleReset = useCallback(() => {
    setBubbles([]);
    handleDragReset();
  }, [setBubbles, handleDragReset]);

  return (
    <div>
      <Header
        handleReset={handleReset}
        ovalAllowed={ovalAllowed}
        setOvalAllowed={setOvalAllowed}
      />
      <div className="primary background">
        <Warning
          message={message}
          openSnackbar={openSnackbar}
          setOpenSnackbar={setOpenSnackbar}
        />
        <DragBox
          isDragging={isDragging}
          startPos={startPos}
          curPos={curPos}
          ovalAllowed={ovalAllowed}
        />
        {bubbles.map((bubble) => bubble)}
      </div>
      <Footer />
    </div>
  );
};

export default BouncyBubbles;
