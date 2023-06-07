import React, { useState } from "react";
import "./styles.css";
import _ from "lodash";
import { Loc, Player } from "./types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import { N } from "./constants";

interface TileProps {
  row: number;
  col: number;
  miniGameIsFocused: boolean;
  handleTileClick: (loc: Loc) => void;
  tilePlayer?: Player;
}

const Tile: React.FC<TileProps> = ({
  row,
  col,
  miniGameIsFocused,
  handleTileClick,
  tilePlayer,
}) => {
  const [hover, setHover] = useState<boolean>(false);

  return (
    <div
      className={`tile tile-${row === N - 1 ? row : "r"}-${
        row === N - 1 && col !== N - 1 ? "c" : col
      } ${
        _.isNil(tilePlayer) && hover && miniGameIsFocused ? "tile-hover" : ""
      }`}
      onClick={() => handleTileClick({ row, col })}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {tilePlayer === Player.X && (
        <FontAwesomeIcon className="tile-icon" icon={faXmark} size="lg" />
      )}
      {tilePlayer === Player.O && (
        <FontAwesomeIcon className="tile-icon" icon={faCircle} />
      )}
    </div>
  );
};

export default Tile;
