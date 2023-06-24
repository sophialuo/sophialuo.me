"use client";

import _ from "lodash";
import React, { useState, useEffect, useCallback } from "react";
import { MousePos } from "./types";

const defaultMinXDiff = 10;
const defaultMinYDiff = 10;

const inDraggableBounds = (validBounds: DOMRect, pos: MousePos) => {
  const { top, left, right, bottom } = validBounds;
  return pos.x <= right && pos.x >= left && pos.y <= bottom && pos.y >= top;
};

const useMouseDrag = (props?: {
  minXDiff?: number;
  minYDiff?: number;
  maxXDiff?: number;
  maxYDiff?: number;
  validBounds?: DOMRect;
  onMouseUp?: (
    startPos: MousePos | undefined,
    endPos: MousePos | undefined
  ) => void;
}) => {
  const [message, setMessage] = useState<string>("");
  const [curPos, setCurPos] = useState<MousePos | undefined>();
  const [startPos, setStartPos] = useState<MousePos | undefined>();
  const [isDragging, setIsDragging] = useState<boolean>(false);

  const isOutOfBounds = (pos: MousePos) =>
    props?.validBounds && !inDraggableBounds(props.validBounds, pos);

  const handleReset = useCallback(() => {
    setStartPos(undefined);
    setMessage("");
    setIsDragging(false);
  }, [setStartPos, setMessage]);

  const handleMouseMove = useCallback(
    (event: { clientX: any; clientY: any }) => {
      setCurPos({ x: event.clientX, y: event.clientY });
    },
    [setCurPos]
  );

  const handleMouseDown = useCallback(
    (event: { clientX: any; clientY: any }) => {
      if (isOutOfBounds({ x: event.clientX, y: event.clientY })) {
        handleReset();
        return;
      }
      setIsDragging(true);
      setStartPos({ x: event.clientX, y: event.clientY });
    },
    [setStartPos, setIsDragging, handleReset, props?.validBounds]
  );

  const handleMouseUp = useCallback(
    (_event: { clientX: any; clientY: any }) => {
      if (curPos && isOutOfBounds(curPos)) {
        handleReset();
        return;
      }

      const xDiff = Math.abs((startPos?.x ?? 0) - (curPos?.x ?? 0));
      const yDiff = Math.abs((startPos?.y ?? 0) - (curPos?.y ?? 0));

      let newStartPos = startPos;
      let newMessage = message;
      if (_.isNil(startPos) || _.isNil(curPos)) {
        handleReset();
        return;
      } else if (
        xDiff < (props?.minXDiff ?? defaultMinXDiff) ||
        yDiff < (props?.minYDiff ?? defaultMinYDiff)
      ) {
        newStartPos = undefined;
        if (xDiff > 0 && yDiff > 0) {
          newMessage = "Too small!";
        } // otherwise, a button was probably clicked and the message would be irrelevant
      } else if (
        (props?.maxXDiff && xDiff > props.maxXDiff) ||
        (props?.maxYDiff && yDiff > props.maxYDiff)
      ) {
        newStartPos = undefined;
        newMessage = "Too big!";
      } else {
        newMessage = "";
      }
      setStartPos(newStartPos);
      setMessage(newMessage);

      props?.onMouseUp && props.onMouseUp(newStartPos, curPos);

      setIsDragging(false);
    },
    [startPos, curPos, handleReset, setIsDragging, props?.validBounds]
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
    curPos,
    isDragging,
    message,
    handleReset,
  };
};

export default useMouseDrag;
