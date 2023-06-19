import _ from "lodash";
import { Loc, Player, GameStatus } from "./types";
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
  gameState: (Player | undefined)[][] | GameStatus[][],
  playerOrStatus: Player | GameStatus,
  diffs: Loc[]
) => {
  const { row, col } = loc;
  let count = 0;
  for (const diff of diffs) {
    const { row: rowDiff, col: colDiff } = diff;
    const newLoc = { row: row + rowDiff, col: col + colDiff };
    if (
      locIsValid(newLoc) &&
      gameState[newLoc.row][newLoc.col] === playerOrStatus
    ) {
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

export const checkGameStatus = (
  moveCount: number,
  loc: Loc,
  gameState: (Player | undefined)[][] | GameStatus[][],
  playerOrStatus: Player | GameStatus
) => {
  if (
    checkGameWinHelper(loc, gameState, playerOrStatus, horizontalDiff) ||
    checkGameWinHelper(loc, gameState, playerOrStatus, verticalDiff) ||
    checkGameWinHelper(loc, gameState, playerOrStatus, majorDiagDiff) ||
    checkGameWinHelper(loc, gameState, playerOrStatus, minorDiagDiff)
  ) {
    if (playerOrStatus === Player.O || playerOrStatus === GameStatus.OWon) {
      return GameStatus.OWon;
    }
    if (playerOrStatus === Player.X || playerOrStatus === GameStatus.XWon) {
      return GameStatus.XWon;
    }
  }

  if (moveCount === N * N) {
    return GameStatus.Tied;
  }
  return GameStatus.InProgress;
};

export const getGameMessage = (
  moveCount: number,
  mainGameStatus: GameStatus,
  focusedLoc?: Loc
) => {
  if (moveCount === 0) {
    return MSG_BEGINNING;
  }
  if (mainGameStatus !== GameStatus.InProgress) {
    return MSG_GAME_OVER(mainGameStatus);
  } else {
    if (!focusedLoc) {
      return MSG_CLICK_ANYWHERE;
    } else {
      return MSG_CLICK_FOCUSED;
    }
  }
};
