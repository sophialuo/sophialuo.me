import React, { useState, useCallback } from "react";
import _ from "lodash";
import { Link } from "react-router-dom";
import MiniGame from "./MiniGame";
import "./Main.css";
import { Loc, Player } from "./types";
import { N } from "./constants";

const Main: React.FC = () => {
  const [isFirstTurn, setIsFirstTurn] = useState<boolean>(true);
  const [focusedLoc, setFocusedLoc] = useState<Loc | undefined>(undefined);
  const [curPlayer, setCurPlayer] = useState<Player>(Player.X);

  const handleNext = useCallback(() => {
    if (curPlayer === Player.O) {
      setCurPlayer(Player.X);
    } else {
      setCurPlayer(Player.O);
    }
    setIsFirstTurn(false);
  }, [curPlayer, setCurPlayer]);

  return (
    <div className="container">
      <div className="header">
        <Link to="/">Back</Link>
      </div>
      <div className="game-wrapper">
        <h1>Ultimate Tic Tac Toe</h1>
        <div className="ultimate-board">
          {_.range(N).map((row: number) => {
            return (
              <div className="ultimate-board-row">
                {_.range(N).map((col: number) => {
                  return (
                    <div onClick={() => setFocusedLoc({ row, col })}>
                      <MiniGame
                        key={`ultimate-tic-tac-toe_${row}_${col}`}
                        N={N}
                        isFirstTurn={isFirstTurn}
                        focused={
                          row === focusedLoc?.row && col === focusedLoc?.col
                        }
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
