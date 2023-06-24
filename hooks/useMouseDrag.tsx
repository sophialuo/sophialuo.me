"use client";

import _ from "lodash";
import React, { useState, useEffect, useCallback } from "react";
import { MousePos } from "./types";

const defaultMinXDiff = 10;
const defaultMinYDiff = 10;

const useMouseDrag = (props?: {
  minXDiff?: number;
  minYDiff?: number;
  maxXDiff?: number;
  maxYDiff?: number;
  onMouseUp?: (startPos: MousePos, endPos: MousePos) => void;
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
      let newStartPos = startPos;
      let newEndPos = endPos;
      let newMessage = message;
      if (_.isNil(startPos) || _.isNil(curPos)) {
        newStartPos = undefined;
        newEndPos = undefined;
        newMessage = "";
      } else if (
        xDiff < (props?.minXDiff ?? defaultMinXDiff) ||
        yDiff < (props?.minYDiff ?? defaultMinYDiff)
      ) {
        newStartPos = undefined;
        newEndPos = undefined;
        newMessage = "Too small!";
      } else if (
        (props?.maxXDiff && xDiff > props.maxXDiff) ||
        (props?.maxYDiff && yDiff > props.maxYDiff)
      ) {
        newStartPos = undefined;
        newEndPos = undefined;
        newMessage = "Too big!";
      } else {
        newEndPos = { x: curPos.x, y: curPos.y };
        newMessage = "";
      }

      setStartPos(newStartPos);
      setEndPos(newEndPos);
      setMessage(newMessage);
      if (newStartPos && newEndPos) {
        props?.onMouseUp && props.onMouseUp(newStartPos, newEndPos);
      }
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
