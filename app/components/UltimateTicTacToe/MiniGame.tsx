import "./styles.css";
import React, { useState, useCallback } from "react";
import _ from "lodash";
import { Loc, Player, GameStatus } from "./types";
import { checkGameStatus } from "./helpers";
import { N } from "./constants";
import Tile from "./Tile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faPencil } from "@fortawesome/free-solid-svg-icons";
import { faCircle } from "@fortawesome/free-regular-svg-icons";

interface MiniGameProps {
  miniGameLoc: Loc;
  isActive: boolean;
  curPlayer: Player;
  mainGameStatus: GameStatus;
  miniGameStatus: GameStatus;
  handleNext: (
    { loc, miniGameStatus }: { loc: Loc; miniGameStatus: GameStatus },
    newLoc: Loc
  ) => void;
  wiggle: boolean;
  setWiggle: (val: boolean) => void;
}

const MiniGame: React.FC<MiniGameProps> = ({
  miniGameLoc,
  isActive,
  curPlayer,
  mainGameStatus,
  miniGameStatus,
  handleNext,
  wiggle,
  setWiggle,
}) => {
  const [moveCount, setMoveCount] = useState<number>(0);
  const [miniGameState, setMiniGameState] = useState<(Player | undefined)[][]>(
    _.range(N).map((_index) => _.range(N).map((_index) => undefined))
  );

  const [showMiniGameStateOnHover, setShowMiniGameStateOnHover] =
    useState<boolean>(true);

  const handleTileClick = useCallback(
    (nextLoc: Loc) => {
      const { row, col } = nextLoc;
      const isClickable = isActive && _.isNil(miniGameState[row][col]);

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
        handleNext({ loc: miniGameLoc, miniGameStatus: newStatus }, nextLoc);
      }
    },
    [
      mainGameStatus,
      miniGameStatus,
      isActive,
      curPlayer,
      miniGameLoc,
      miniGameState,
      setMiniGameState,
      moveCount,
      setMoveCount,
      handleNext,
    ]
  );

  return (
    <div
      className={`board ${isActive ? "board-focused" : ""} ${
        wiggle && miniGameStatus === GameStatus.InProgress ? "board-wiggle" : ""
      }`}
      onAnimationEnd={() => setWiggle(false)}
    >
      {miniGameStatus !== GameStatus.InProgress &&
        !showMiniGameStateOnHover && (
          <div
            className="mini-game-tile"
            onMouseEnter={() => setShowMiniGameStateOnHover(true)}
            onMouseLeave={() => setShowMiniGameStateOnHover(false)}
          >
            <FontAwesomeIcon
              icon={
                miniGameStatus === GameStatus.Tied
                  ? faPencil
                  : miniGameStatus === GameStatus.XWon
                  ? faXmark
                  : faCircle
              }
            />
          </div>
        )}
      {(miniGameStatus === GameStatus.InProgress ||
        showMiniGameStateOnHover) && (
        <div onMouseLeave={() => setShowMiniGameStateOnHover(false)}>
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
                      isActive={isActive}
                    />
                  );
                })}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default MiniGame;
