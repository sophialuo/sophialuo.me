"use client";

import _ from "lodash";
import React, { useState, useEffect, useCallback } from "react";
import { Alert, Button, Snackbar, Switch } from "@mui/material";

import { useMouseDrag } from "../../hooks";
import { MousePos } from "../../hooks/types";

import Bubble from "./Bubble";
import "./styles.css";

const BouncyBubbles: React.FC = () => {
  const [bubbles, setBubbles] = useState<React.JSX.Element[]>([]);
  const [ovalAllowed, setOvalAllowed] = useState<boolean>(false);
  const [openSnackbar, setOpenSnackbar] = useState<boolean>(false);

  const addBubble = useCallback(
    (bubbleStartPos: MousePos, bubbleEndPos: MousePos) => {
      const newBubbles = bubbles;
      const widthDiff = Math.abs(bubbleStartPos.x - bubbleEndPos.x);
      const heightDiff = Math.abs(bubbleStartPos.y - bubbleEndPos.y);

      newBubbles.push(
        <Bubble
          key={`bubble-${bubbles.length}`}
          top={Math.min(bubbleStartPos.y, bubbleEndPos.y)}
          left={Math.min(bubbleStartPos.x, bubbleEndPos.x)}
          width={ovalAllowed ? widthDiff : Math.max(widthDiff, heightDiff)}
          height={ovalAllowed ? heightDiff : Math.max(widthDiff, heightDiff)}
        />
      );
      setBubbles(newBubbles);
    },
    [bubbles, ovalAllowed, setBubbles]
  );
  const { handleReset: handleDragReset, message } = useMouseDrag({
    minXDiff: 50,
    minYDiff: 50,
    maxXDiff: 400,
    maxYDiff: 400,
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
    <div className="background">
      <div>
        <Button onClick={handleReset}>Reset</Button>
        <div>
          <Switch
            checked={ovalAllowed}
            onChange={() => setOvalAllowed(!ovalAllowed)}
          />
          <div>{ovalAllowed ? "Ovals allowed" : "Circles only"}</div>
        </div>
      </div>
      {message && (
        <Snackbar
          open={openSnackbar}
          autoHideDuration={6000}
          onClose={() => setOpenSnackbar(false)}
        >
          <Alert onClose={() => setOpenSnackbar(false)} severity="warning">
            {message}
          </Alert>
        </Snackbar>
      )}
      {bubbles.map((bubble) => bubble)}
    </div>
  );
};

export default BouncyBubbles;
