"use client";

import React, { useState, useCallback, useMemo } from "react";
import _ from "lodash";
import Link from "next/link";
import MiniGame from "./MiniGame";
import "./styles.css";
import { Loc, Status, Player } from "./types";
import { N } from "./constants";
import { checkStatus, getGameMessage } from "./helpers";

const Main: React.FC = () => {
  const [wiggle, setWiggle] = useState<boolean>(false);
  const [focusedLoc, setFocusedLoc] = useState<Loc | undefined>(undefined);
  const [curPlayer, setCurPlayer] = useState<Player>(Player.X);

  const [moveCount, setMoveCount] = useState<number>(0);
  const [mainGameState, setMainGameState] = useState<Status[][]>(
    _.range(N).map((_index: number) =>
      _.range(N).map((_index: number) => Status.InProgress)
    )
  );
  const [mainStatus, setMainStatus] = useState<Status>(Status.InProgress);

  const handleNext = useCallback(
    ({ loc, miniStatus }: { loc: Loc; miniStatus: Status }, newLoc: Loc) => {
      // change player
      if (curPlayer === Player.O) {
        setCurPlayer(Player.X);
      } else {
        setCurPlayer(Player.O);
      }

      // update movecount
      const newMoveCount = moveCount + 1;
      setMoveCount(newMoveCount);

      const { row, col } = loc;
      let newMainGameState = mainGameState;
      let newMainStatus = mainStatus;
      if (miniStatus !== Status.InProgress) {
        // update maingamestate
        newMainGameState = mainGameState;
        newMainGameState[row][col] = miniStatus;
        setMainGameState(newMainGameState);

        // update maingame status
        newMainStatus = checkStatus(
          newMoveCount,
          loc,
          newMainGameState,
          miniStatus
        );
        setMainStatus(newMainStatus);
      }

      // main game is over
      if (newMainStatus !== Status.InProgress) {
        setFocusedLoc(undefined);
        return;
      }

      // focused minigame (or not)
      if (newMainGameState[newLoc.row][newLoc.col] === Status.InProgress) {
        setFocusedLoc(newLoc);
      } else {
        setFocusedLoc(undefined);
      }
      setWiggle(true);
    },
    [
      mainGameState,
      setMainGameState,
      moveCount,
      setMoveCount,
      setMainStatus,
      curPlayer,
      setCurPlayer,
      setWiggle,
    ]
  );

  const gameMessage = useMemo(
    () => getGameMessage(moveCount, mainStatus, focusedLoc),
    [moveCount, mainStatus, focusedLoc]
  );

  return (
    <div className="container">
      <div className="header">
        <Link href="/">Back</Link>
      </div>
      <div className="game-wrapper">
        <h1 className="ultimate-h1">Ultimate Tic Tac Toe</h1>
        <h2 className="game-message">{gameMessage[0]}</h2>
        {gameMessage.length > 0 && (
          <div className="game-sub-message-wrapper">
            {gameMessage.slice(1).map((msg) => (
              <div className="game-sub-message" key={msg}>
                {msg}
              </div>
            ))}
          </div>
        )}
        {mainStatus === Status.InProgress && (
          <h2 className="game-message">{`Next: Player ${
            curPlayer === Player.X ? "X" : "O"
          }`}</h2>
        )}
        <div className="ultimate-board">
          {_.range(N).map((row: number) => {
            return (
              <div
                className="ultimate-board-row"
                key={`ultimate-tic-tac-toe_${row}`}
              >
                {_.range(N).map((col: number) => {
                  const miniStatus = mainGameState[row][col];
                  const isActive =
                    mainStatus === Status.InProgress &&
                    miniStatus === Status.InProgress &&
                    (_.isNil(focusedLoc) ||
                      (row === focusedLoc?.row && col === focusedLoc?.col));

                  return (
                    <div key={`ultimate-tic-tac-toe_${row}_${col}`}>
                      <MiniGame
                        miniGameLoc={{ row, col }}
                        isActive={isActive}
                        wiggle={
                          mainStatus === Status.InProgress && wiggle && isActive
                        }
                        setWiggle={setWiggle}
                        mainStatus={mainStatus}
                        miniStatus={miniStatus}
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
