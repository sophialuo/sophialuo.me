import React from "react";
import _ from "lodash";
import { Link } from "react-router-dom";
import "./UltimateTicTacToe.css";

const N = 3;

const UltimateTicTacToe: React.FC = () => {
  return (
    <div className="container">
      <div className="header">
        <Link to="/">Back</Link>
      </div>
      <div className="game-wrapper">
        <h1>Ultimate Tic Tac Toe</h1>
        <div className="board">
          {_.range(N).map((row: number) => {
            return (
              <div className="board-row">
                {_.range(N).map((col: number) => {
                  return (
                    <div
                      key={`ultimate-tic-tac-toe_${row}_${col}`}
                      className={`tile tile_${row === N - 1 ? row : "r"}_${
                        row === N - 1 && col !== N - 1 ? "c" : col
                      }`}
                    >
                      Coming soon!
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

export default UltimateTicTacToe;
