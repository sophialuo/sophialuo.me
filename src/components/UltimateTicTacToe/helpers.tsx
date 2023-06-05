import _ from "lodash";
import { Loc, Player, GameStatus } from "./types";
import { N } from "./constants";

const locIsValid = (loc: Loc) => {
  const { row, col } = loc;
  return row >= 0 && row < N && col >= 0 && col < N;
};

const checkGameWinHelper = (
  loc: Loc,
  gameState: (Player | undefined)[][] | GameStatus[][],
  player: Player | GameStatus,
  diffs: Loc[]
) => {
  const { row, col } = loc;
  let count = 0;
  for (const diff of diffs) {
    const { row: rowDiff, col: colDiff } = diff;
    const newLoc = { row: row + rowDiff, col: col + colDiff };
    if (locIsValid(newLoc) && gameState[newLoc.row][newLoc.col] === player) {
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
  player: Player | GameStatus
) => {
  if (
    checkGameWinHelper(loc, gameState, player, horizontalDiff) ||
    checkGameWinHelper(loc, gameState, player, verticalDiff) ||
    checkGameWinHelper(loc, gameState, player, majorDiagDiff) ||
    checkGameWinHelper(loc, gameState, player, minorDiagDiff)
  ) {
    return player === Player.O ? GameStatus.OWon : GameStatus.XWon;
  }

  if (moveCount === N * N) {
    return GameStatus.Tied;
  }
  return GameStatus.InProgress;
};
