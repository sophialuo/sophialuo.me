import { MousePos } from "../../hooks/types";

export const getAdjustedDim = (
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
