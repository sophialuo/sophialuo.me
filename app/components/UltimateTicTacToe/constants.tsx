import { GameStatus } from "./types";

export const N = 3;

export const MSG_BEGINNING = [
  "Welcome!",
  "Ultimate Tic Tac Toe involves playing 9 mini Tic Tac Toe games with two players: X and O.",
  "Anytime you click on a tile in a mini-game, the next player must select a tile in the mini-game that correponds to that tile in the larger ultimate game.",
  "For instance, if Player X selects the top left tile of the middle mini game, Player O can then select any valid tile in the top left mini game.",
  "If the top left mini game is already complete then Player O can select any tile from any mini-game that is in progress.",
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
