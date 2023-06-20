import React, { useState } from "react";
import "./styles.css";
import _ from "lodash";
import { Loc, Status } from "./types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import { N } from "./constants";

interface TileProps {
  row: number;
  col: number;
  isActive: boolean;
  handleTileClick: (loc: Loc) => void;
  tileStatus?: Status;
}

const Tile: React.FC<TileProps> = ({
  row,
  col,
  isActive,
  handleTileClick,
  tileStatus,
}) => {
  const [hover, setHover] = useState<boolean>(false);

  return (
    <div
      className={`tile tile-${row === N - 1 ? row : "r"}-${
        row === N - 1 && col !== N - 1 ? "c" : col
      } ${_.isNil(tileStatus) && hover && isActive ? "tile-hover" : ""}`}
      onClick={() => handleTileClick({ row, col })}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {tileStatus === Status.XWon && (
        <FontAwesomeIcon className="tile-icon" icon={faXmark} size="lg" />
      )}
      {tileStatus === Status.OWon && (
        <FontAwesomeIcon className="tile-icon" icon={faCircle} />
      )}
    </div>
  );
};

export default Tile;
