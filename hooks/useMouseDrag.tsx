"use client";

import _ from "lodash";
import { number } from "prop-types";
import React, { useState, useEffect, useCallback } from "react";

interface MousePos {
  x: number;
  y: number;
}

const defaultMinXDiff = 10;
const defaultMinYDiff = 10;

const useMouseDrag = (props?: {
  minXDiff?: number;
  minYDiff?: number;
  maxXDiff?: number;
  maxYDiff?: number;
}) => {
  const [message, setMessage] = useState<string>("");
  const [curPos, setCurPos] = useState<MousePos | undefined>();
  const [startPos, setStartPos] = useState<MousePos | undefined>();
  const [endPos, setEndPos] = useState<MousePos | undefined>();

  const handleReset = useCallback(() => {
    setStartPos(undefined);
    setEndPos(undefined);
    setMessage("");
  }, [setStartPos, setEndPos]);

  const handleMouseMove = useCallback(
    (event: { clientX: any; clientY: any }) => {
      setCurPos({ x: event.clientX, y: event.clientY });
    },
    [setCurPos]
  );

  const handleMouseDown = useCallback(
    (event: { clientX: any; clientY: any }) => {
      setStartPos({ x: event.clientX, y: event.clientY });
    },
    [setStartPos]
  );

  const handleMouseUp = useCallback(
    (_event: { clientX: any; clientY: any }) => {
      const xDiff = Math.abs((startPos?.x ?? 0) - (curPos?.x ?? 0));
      const yDiff = Math.abs((startPos?.y ?? 0) - (curPos?.y ?? 0));
      if (_.isNil(startPos) || _.isNil(curPos)) {
        setStartPos(undefined);
        setEndPos(undefined);
        setMessage("");
        return;
      }
      if (
        xDiff < (props?.minXDiff ?? defaultMinXDiff) ||
        yDiff < (props?.minYDiff ?? defaultMinYDiff)
      ) {
        setStartPos(undefined);
        setEndPos(undefined);
        setMessage("Too small!");
        return;
      }
      if (
        (props?.maxXDiff && xDiff > props.maxXDiff) ||
        (props?.maxYDiff && yDiff > props.maxYDiff)
      ) {
        setStartPos(undefined);
        setEndPos(undefined);
        setMessage("Too big!");
        return;
      }
      setEndPos({ x: curPos.x, y: curPos.y });
      setMessage("");
    },
    [startPos, curPos]
  );

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [handleMouseMove]);

  useEffect(() => {
    window.addEventListener("mousedown", handleMouseDown);
    return () => {
      window.removeEventListener("mousedown", handleMouseDown);
    };
  }, [handleMouseDown]);

  useEffect(() => {
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [handleMouseUp]);

  return {
    startPos,
    endPos,
    message,
    handleReset,
  };
};

export default useMouseDrag;
