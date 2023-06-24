"use client";

import _ from "lodash";
import React, { useState, useEffect, useCallback } from "react";
import { Alert, Button, Snackbar, Switch } from "@mui/material";

import { useMouseDrag } from "../../hooks";
import { MousePos } from "../../hooks/types";

import Bubble from "./Bubble";
import "./styles.css";

const getAdjustedDim = (
  ovalAllowed: boolean,
  startPos: MousePos,
  endPos: MousePos
) => {
  const widthDiff = Math.abs(startPos.x - endPos.x);
  const heightDiff = Math.abs(startPos.y - endPos.y);
  const adjustedHeight = ovalAllowed
    ? heightDiff
    : Math.max(widthDiff, heightDiff);
  const adjustedWidth = ovalAllowed
    ? widthDiff
    : Math.max(widthDiff, heightDiff);

  return { width: adjustedWidth, height: adjustedHeight };
};

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
    validBounds: document
      .getElementsByClassName("background")?.[0]
      ?.getBoundingClientRect(),
    onMouseUp: addBubble,
  });

  useEffect(() => {
    if (message) {
      setOpenSnackbar(true);
    }
  }, [message]);

  const handleReset = useCallback(() => {
    setBubbles([]);
    handleDragReset();
  }, [setBubbles, handleDragReset]);

  return (
    <div>
      <div className="banner" style={{ height: 60 }}>
        <Button
          variant="contained"
          className="reset-button"
          onClick={handleReset}
        >
          Reset
        </Button>
        <div className="switch">
          <Switch
            checked={ovalAllowed}
            onChange={() => setOvalAllowed(!ovalAllowed)}
          />
          <div>{ovalAllowed ? "OVALS ALLOWED" : "CIRCLES ONLY"}</div>
        </div>
      </div>
      <div className="background">
        {message && (
          <Snackbar
            open={openSnackbar}
            autoHideDuration={6000}
            onClose={() => setOpenSnackbar(false)}
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
            style={{ height: 40, justifyContent: "center" }}
          >
            <Alert
              className="alert"
              onClose={() => setOpenSnackbar(false)}
              severity="warning"
              sx={{ "& .MuiAlert-icon": { color: "darkblue" } }}
            >
              {message}
            </Alert>
          </Snackbar>
        )}
        {startPos && curPos && isDragging && (
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
        )}
        {bubbles.map((bubble) => bubble)}
      </div>
      <div className="banner" style={{ height: 20 }}></div>
    </div>
  );
};

export default BouncyBubbles;
