export interface Loc {
  row: number;
  col: number;
}

export enum Player {
  O = 0,
  X = 1,
}

export enum GameStatus {
  InProgress = "In Progress",
  Tied = "Tied",
  OWon = "Player O Won",
  XWon = "Player X Won",
}
