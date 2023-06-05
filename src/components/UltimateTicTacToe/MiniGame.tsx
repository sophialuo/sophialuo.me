import React, { useState, useCallback } from "react";
import _ from "lodash";
import "./Main.css";
import { Loc, Player, GameStatus } from "./types";
import { checkGameStatus } from "./helpers";
import { N } from "./constants";
import Tile from "./Tile";

interface MiniGameProps {
  miniGameLoc: Loc;
  focused: boolean;
  anyMiniGameAllowed: boolean;
  curPlayer: Player;
  status: GameStatus;
  handleNext: (
    { loc, status }: { loc: Loc; status: GameStatus },
    newLoc: Loc
  ) => void;
}

const MiniGame: React.FC<MiniGameProps> = ({
  miniGameLoc,
  focused,
  anyMiniGameAllowed,
  curPlayer,
  status,
  handleNext,
}) => {
  const [moveCount, setMoveCount] = useState<number>(0);

  const [miniGameState, setMiniGameState] = useState<(Player | undefined)[][]>(
    _.range(N).map((_index) => _.range(N).map((_index) => undefined))
  );

  const handleTileClick = useCallback(
    (nextLoc: Loc) => {
      const { row, col } = nextLoc;
      const isClickable =
        status === GameStatus.InProgress &&
        (anyMiniGameAllowed || (focused && _.isNil(miniGameState[row][col])));

      if (isClickable) {
        // update minigamestate
        const newMiniGameState = _.cloneDeep(miniGameState);
        newMiniGameState[row][col] = curPlayer;
        setMiniGameState(newMiniGameState);
        // update movecount
        const newMoveCount = moveCount + 1;
        setMoveCount(newMoveCount);
        // update minigame status
        const newStatus = checkGameStatus(
          newMoveCount,
          nextLoc,
          newMiniGameState,
          curPlayer
        );
        // next turn
        handleNext({ loc: miniGameLoc, status: newStatus }, nextLoc);
      }
    },
    [
      status,
      anyMiniGameAllowed,
      focused,
      miniGameState,
      setMiniGameState,
      moveCount,
      setMoveCount,
      handleNext,
    ]
  );

  return (
    <div className={`board ${focused ? "board-focused" : ""}`}>
      {status === GameStatus.Tied && <div>Tied</div>}
      {status === GameStatus.XWon && <div>X won</div>}
      {status === GameStatus.OWon && <div>O won</div>}
      {status === GameStatus.InProgress &&
        _.range(N).map((row: number) => {
          return (
            <div className="board-row">
              {_.range(N).map((col: number) => {
                return (
                  <Tile
                    key={`tic-tac-toe_${row}_${col}`}
                    row={row}
                    col={col}
                    handleTileClick={handleTileClick}
                    tilePlayer={miniGameState[row][col]}
                  />
                );
              })}
            </div>
          );
        })}
    </div>
  );
};

export default MiniGame;
