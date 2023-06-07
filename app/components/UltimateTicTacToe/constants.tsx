import { GameStatus } from "./types";

export const N = 3;

export const MSG_BEGINNING = [
  "Welcome!",
  "Ultimate Tic Tac Toe involves playing 9 mini Tic Tac Toe games with two players: X and O.",
  "To win a mini game, you must place your letter in three tiles in a row (horizontally, vertically, or diagonally).",
  "To win the ultimate game, you must win 3 mini games in a row.",
  "Player X goes first. Please click on any tile to begin.",
];
export const MSG_CLICK_FOCUSED = [
  "Please click on an empty tile in the focused mini game.",
];
export const MSG_CLICK_ANYWHERE = [
  "Please click on any empty tile in any mini game",
];
export const MSG_GAME_OVER = (status: GameStatus) => [`Game Over: ${status}`];
