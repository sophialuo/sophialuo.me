import "./styles.css";
import React, { useState, useCallback } from "react";
import _ from "lodash";
import { Loc, Player, Status } from "./types";
import { checkStatus } from "./helpers";
import { N } from "./constants";
import Tile from "./Tile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faPencil } from "@fortawesome/free-solid-svg-icons";
import { faCircle } from "@fortawesome/free-regular-svg-icons";

interface MiniGameProps {
  miniGameLoc: Loc;
  isActive: boolean;
  curPlayer: Player;
  mainStatus: Status;
  miniStatus: Status;
  handleNext: (
    { loc, miniStatus }: { loc: Loc; miniStatus: Status },
    newLoc: Loc
  ) => void;
  wiggle: boolean;
  setWiggle: (val: boolean) => void;
}

const MiniGame: React.FC<MiniGameProps> = ({
  miniGameLoc,
  isActive,
  curPlayer,
  mainStatus,
  miniStatus,
  handleNext,
  wiggle,
  setWiggle,
}) => {
  const [moveCount, setMoveCount] = useState<number>(0);
  const [miniGameState, setMiniGameState] = useState<(Status | undefined)[][]>(
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
        const tileStatus = curPlayer === Player.X ? Status.XWon : Status.OWon;
        newMiniGameState[row][col] = tileStatus;
        setMiniGameState(newMiniGameState);
        // update movecount
        const newMoveCount = moveCount + 1;
        setMoveCount(newMoveCount);
        // update minigame status
        const newStatus = checkStatus(
          newMoveCount,
          nextLoc,
          newMiniGameState,
          tileStatus
        );
        // next turn
        handleNext({ loc: miniGameLoc, miniStatus: newStatus }, nextLoc);
      }
    },
    [
      mainStatus,
      miniStatus,
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
        wiggle && miniStatus === Status.InProgress ? "board-wiggle" : ""
      }`}
      onAnimationEnd={() => setWiggle(false)}
    >
      {miniStatus !== Status.InProgress && !showMiniGameStateOnHover && (
        <div
          className="mini-game-tile"
          onMouseEnter={() => setShowMiniGameStateOnHover(true)}
          onMouseLeave={() => setShowMiniGameStateOnHover(false)}
        >
          <FontAwesomeIcon
            icon={
              miniStatus === Status.Tied
                ? faPencil
                : miniStatus === Status.XWon
                ? faXmark
                : faCircle
            }
          />
        </div>
      )}
      {(miniStatus === Status.InProgress || showMiniGameStateOnHover) && (
        <div onMouseLeave={() => setShowMiniGameStateOnHover(false)}>
          {_.range(N).map((row: number) => {
            return (
              <div className="board-row" key={`minigame-board-row-${row}`}>
                {_.range(N).map((col: number) => {
                  return (
                    <Tile
                      key={`tic-tac-toe_${row}_${col}`}
                      row={row}
                      col={col}
                      handleTileClick={handleTileClick}
                      tileStatus={miniGameState[row][col]}
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
