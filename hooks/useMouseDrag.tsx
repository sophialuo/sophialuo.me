"use client";

import _ from "lodash";
import { number } from "prop-types";
import React, { useState, useEffect, useCallback } from "react";

interface MousePos {
  x: number;
  y: number;
}

const defaultXDiff = 10;
const defaultYDiff = 10;

const useMouseDrag = (props?: { minXDiff?: number; minYDiff?: number }) => {
  const [curPos, setCurPos] = useState<MousePos | undefined>();
  const [startPos, setStartPos] = useState<MousePos | undefined>();
  const [endPos, setEndPos] = useState<MousePos | undefined>();

  const handleReset = useCallback(() => {
    setStartPos(undefined);
    setEndPos(undefined);
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
      if (
        _.isNil(startPos) ||
        _.isNil(curPos) ||
        Math.abs(startPos.x - curPos.x) < (props?.minXDiff ?? defaultXDiff) ||
        Math.abs(startPos.y - curPos.y) < (props?.minYDiff ?? defaultYDiff)
      ) {
        setEndPos(undefined);
        return;
      }
      setEndPos({ x: curPos.x, y: curPos.y });
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
    handleReset,
  };
};

export default useMouseDrag;
