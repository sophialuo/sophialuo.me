import React, { useState } from "react";
import _ from "lodash";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import "./styles.css";

const PATH = "/ultimate-tic-tac-toe";
const UltimateTicTacToe: React.FC = () => {
  const router = useRouter();
  const [hover, setHover] = useState(false);

  return (
    <div
      className="preview-container"
      onClick={() => {
        router.push(PATH);
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="preview-background">
        <div className={`x-icon ${hover ? "x-icon-hover" : ""}`}>
          <FontAwesomeIcon icon={faXmark} size="lg" />
        </div>
        <div className={`o-icon ${hover ? "o-icon-hover" : ""}`}>
          <FontAwesomeIcon icon={faCircle} size="sm" />
        </div>
        <div className={`lineh1 ${hover ? "lineh1-hover" : ""}`}></div>
        <div className={`lineh2 ${hover ? "lineh2-hover" : ""}`}></div>
        <div className={`linev1 ${hover ? "linev1-hover" : ""}`}></div>
        <div className={`linev2 ${hover ? "linev2-hover" : ""}`}></div>
        <div className={`ultimate-name ${hover ? "ultimate-name-hover" : ""}`}>
          Ultimate
        </div>
        <div
          className={`tic-tac-toe-name ${
            hover ? "tic-tac-toe-name-hover" : ""
          }`}
        >
          Tic Tac Toe
        </div>
      </div>
    </div>
  );
};

export default UltimateTicTacToe;
