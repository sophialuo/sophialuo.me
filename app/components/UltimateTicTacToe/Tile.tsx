import React from "react";
import "./styles.css";
import { Loc, Player } from "./types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import { N } from "./constants";

interface TileProps {
  row: number;
  col: number;
  handleTileClick: (loc: Loc) => void;
  tilePlayer?: Player;
}

const Tile: React.FC<TileProps> = ({
  row,
  col,
  handleTileClick,
  tilePlayer,
}) => {
  return (
    <div
      className={`tile tile_${row === N - 1 ? row : "r"}_${
        row === N - 1 && col !== N - 1 ? "c" : col
      }`}
      onClick={() => handleTileClick({ row, col })}
    >
      {tilePlayer === Player.X && <FontAwesomeIcon icon={faXmark} size="lg" />}
      {tilePlayer === Player.O && <FontAwesomeIcon icon={faCircle} />}
    </div>
  );
};

export default Tile;
