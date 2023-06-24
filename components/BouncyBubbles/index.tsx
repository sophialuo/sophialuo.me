"use client";

import _ from "lodash";
import React, { useState, useEffect, useCallback } from "react";
import { Alert, Button, Snackbar, Switch } from "@mui/material";

import { useMouseDrag } from "../../hooks";
import Bubble from "./Bubble";
import "./styles.css";

const BouncyBubbles: React.FC = () => {
  const {
    startPos,
    endPos,
    handleReset: handleDragReset,
    message,
  } = useMouseDrag({
    minXDiff: 50,
    minYDiff: 50,
    maxXDiff: 400,
    maxYDiff: 400,
  });
  const [bubbles, setBubbles] = useState<React.JSX.Element[]>([]);
  const [ovalAllowed, setOvalAllowed] = useState<boolean>(false);
  const [openSnackbar, setOpenSnackbar] = useState<boolean>(false);

  useEffect(() => {
    if (!_.isNil(startPos) && !_.isNil(endPos)) {
      const newBubbles = bubbles;
      const widthDiff = Math.abs(startPos.x - endPos.x);
      const heightDiff = Math.abs(startPos.y - endPos.y);

      newBubbles.push(
        <Bubble
          key={`bubble-${bubbles.length}`}
          top={Math.min(startPos.y, endPos.y)}
          left={Math.min(startPos.x, endPos.x)}
          width={ovalAllowed ? widthDiff : Math.max(widthDiff, heightDiff)}
          height={ovalAllowed ? heightDiff : Math.max(widthDiff, heightDiff)}
        />
      );
      setBubbles(newBubbles);
    }
  }, [endPos]);

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
