import React, { useState } from "react";
import _ from "lodash";
import "./Main.css";
import { Loc, Player } from "./types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import { N } from "./constants";

interface TileProps {
  row: number;
  col: number;
  curPlayer: Player;
  isFirstTurn: boolean;
  miniGameIsFocused: boolean;
  handleNext: (loc: Loc) => void;
}

const Tile: React.FC<TileProps> = ({
  row,
  col,
  curPlayer,
  isFirstTurn,
  miniGameIsFocused,
  handleNext,
}) => {
  const [tilePlayer, setTilePlayer] = useState<Player | undefined>(undefined);
  const isClickable = isFirstTurn || (miniGameIsFocused && _.isNil(tilePlayer));

  return (
    <div
      className={`tile tile_${row === N - 1 ? row : "r"}_${
        row === N - 1 && col !== N - 1 ? "c" : col
      }`}
      onClick={() => {
        if (isClickable) {
          setTilePlayer(curPlayer);
          handleNext({ row, col });
        }
      }}
    >
      {tilePlayer === Player.X && <FontAwesomeIcon icon={faXmark} />}
      {tilePlayer === Player.O && <FontAwesomeIcon icon={faCircle} />}
    </div>
  );
};

export default Tile;
