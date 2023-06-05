import React from "react";
import _ from "lodash";
import "./Main.css";
import { Loc, Player } from "./types";
import { N } from "./constants";
import Tile from "./Tile";

interface MiniGameProps {
  N: number;
  isFirstTurn: boolean;
  focused: boolean;
  curPlayer: Player;
  handleNext: (loc: Loc) => void;
}

const MiniGame: React.FC<MiniGameProps> = ({
  N,
  focused,
  isFirstTurn,
  curPlayer,
  handleNext,
}) => {
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
                  curPlayer={curPlayer}
                  isFirstTurn={isFirstTurn}
                  miniGameIsFocused={focused}
                  handleNext={handleNext}
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
