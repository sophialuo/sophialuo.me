import _ from "lodash";
import { Loc, Status } from "./types";
import {
  N,
  MSG_BEGINNING,
  MSG_CLICK_FOCUSED,
  MSG_CLICK_ANYWHERE,
  MSG_GAME_OVER,
} from "./constants";

const locIsValid = (loc: Loc) => {
  const { row, col } = loc;
  return row >= 0 && row < N && col >= 0 && col < N;
};

const checkGameWinHelper = (
  loc: Loc,
  gameState: (Status | undefined)[][],
  status: Status,
  diffs: Loc[]
) => {
  const { row, col } = loc;
  let count = 0;
  for (const diff of diffs) {
    const { row: rowDiff, col: colDiff } = diff;
    const newLoc = { row: row + rowDiff, col: col + colDiff };
    if (locIsValid(newLoc) && gameState[newLoc.row][newLoc.col] === status) {
      count = count + 1;
    }
    if (count >= N) {
      return true;
    }
  }
  return false;
};

const horizontalDiff = _.range(-N + 1, N).map((diff: number) => {
  return { row: 0, col: diff };
});
const verticalDiff = _.range(-N + 1, N).map((diff: number) => {
  return { row: diff, col: 0 };
});
// top left to bottom right
const majorDiagDiff = _.range(-N + 1, N).map((diff: number) => {
  return { row: -diff, col: -diff };
});
// bottom left to top right
const minorDiagDiff = _.range(-N + 1, N).map((diff: number) => {
  return { row: -diff, col: diff };
});

export const checkStatus = (
  moveCount: number,
  loc: Loc,
  gameState: (Status | undefined)[][],
  status: Status
) => {
  if (
    checkGameWinHelper(loc, gameState, status, horizontalDiff) ||
    checkGameWinHelper(loc, gameState, status, verticalDiff) ||
    checkGameWinHelper(loc, gameState, status, majorDiagDiff) ||
    checkGameWinHelper(loc, gameState, status, minorDiagDiff)
  ) {
    return status;
  }

  if (moveCount === N * N) {
    return Status.Tied;
  }
  return Status.InProgress;
};

export const getGameMessage = (
  moveCount: number,
  mainStatus: Status,
  focusedLoc?: Loc
) => {
  if (moveCount === 0) {
    return MSG_BEGINNING;
  }
  if (mainStatus !== Status.InProgress) {
    return MSG_GAME_OVER(mainStatus);
  } else {
    if (!focusedLoc) {
      return MSG_CLICK_ANYWHERE;
    } else {
      return MSG_CLICK_FOCUSED;
    }
  }
};
