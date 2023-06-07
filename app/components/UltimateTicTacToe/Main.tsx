"use client";

import React, { useState, useCallback } from "react";
import _ from "lodash";
import Link from "next/link";
import MiniGame from "./MiniGame";
import "./Main.css";
import { Loc, GameStatus, Player } from "./types";
import { N } from "./constants";
import { checkGameStatus } from "./helpers";

const Main: React.FC = () => {
  const [focusedLoc, setFocusedLoc] = useState<Loc | undefined>(undefined);
  const [curPlayer, setCurPlayer] = useState<Player>(Player.X);

  const [moveCount, setMoveCount] = useState<number>(0);
  const [mainGameState, setMainGameState] = useState<GameStatus[][]>(
    _.range(N).map((_index: number) =>
      _.range(N).map((_index: number) => GameStatus.InProgress)
    )
  );
  const [mainGameStatus, setMainGameStatus] = useState<GameStatus>(
    GameStatus.InProgress
  );

  const handleNext = useCallback(
    (
      { loc, miniGameStatus }: { loc: Loc; miniGameStatus: GameStatus },
      newLoc: Loc
    ) => {
      // change player
      if (curPlayer === Player.O) {
        setCurPlayer(Player.X);
      } else {
        setCurPlayer(Player.O);
      }

      const { row, col } = loc;
      let newMainGameState = mainGameState;

      if (miniGameStatus !== GameStatus.InProgress) {
        // update maingamestate
        newMainGameState = _.cloneDeep(mainGameState);
        newMainGameState[row][col] = miniGameStatus;
        setMainGameState(newMainGameState);
        // update movecount
        const newMoveCount = moveCount + 1;
        setMoveCount(newMoveCount);
        // update maingame status
        const newStatus = checkGameStatus(
          newMoveCount,
          loc,
          newMainGameState,
          miniGameStatus
        );
        setMainGameStatus(newStatus);

        if (newStatus !== GameStatus.InProgress) {
          setFocusedLoc(undefined);
          return;
        }
      }

      // focused minigame (or not)
      if (newMainGameState[newLoc.row][newLoc.col] === GameStatus.InProgress) {
        setFocusedLoc(newLoc);
      } else {
        setFocusedLoc(undefined);
      }
    },
    [
      mainGameState,
      setMainGameState,
      moveCount,
      setMoveCount,
      setMainGameStatus,
      curPlayer,
      setCurPlayer,
    ]
  );

  return (
    <div className="container">
      <div className="header">
        <Link href="/">Back</Link>
      </div>
      <div className="game-wrapper">
        <h1>Ultimate Tic Tac Toe</h1>
        {mainGameStatus !== GameStatus.InProgress && (
          <h2 className="game-over">{`Game Over: ${mainGameStatus}`}</h2>
        )}
        <div className="ultimate-board">
          {_.range(N).map((row: number) => {
            return (
              <div className="ultimate-board-row">
                {_.range(N).map((col: number) => {
                  return (
                    <div key={`ultimate-tic-tac-toe_${row}_${col}`}>
                      <MiniGame
                        miniGameLoc={{ row, col }}
                        anyMiniGameAllowed={_.isNil(focusedLoc)}
                        focused={
                          row === focusedLoc?.row && col === focusedLoc?.col
                        }
                        mainGameStatus={mainGameStatus}
                        miniGameStatus={mainGameState[row][col]}
                        curPlayer={curPlayer}
                        handleNext={handleNext}
                      />
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Main;
