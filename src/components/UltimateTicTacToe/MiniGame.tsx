import React, { useState, useCallback } from "react";
import _ from "lodash";
import "./Main.css";
import { Loc, Player, GameStatus } from "./types";
import { checkGameStatus } from "./helpers";
import Tile from "./Tile";

interface MiniGameProps {
  N: number;
  anyMiniGameAllowed: boolean;
  focused: boolean;
  curPlayer: Player;
  status: GameStatus;
  handleNext: (loc: Loc, status: GameStatus) => void;
}

const MiniGame: React.FC<MiniGameProps> = ({
  N,
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
    (loc: Loc) => {
      const { row, col } = loc;
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
          loc,
          newMiniGameState,
          curPlayer
        );
        // next turn
        handleNext(loc, newStatus);
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
      {_.range(N).map((row: number) => {
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
