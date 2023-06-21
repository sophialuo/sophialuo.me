import React from "react";
import _ from "lodash";
import { useRouter } from "next/navigation";
import "./styles.css";

const PATH = "/ultimate-tic-tac-toe";
const UltimateTicTacToe: React.FC = () => {
  const router = useRouter();

  return (
    <div
      className="preview-container"
      onClick={() => {
        router.push(PATH);
      }}
    >
      ULTIMATE TIC TAC TOE
    </div>
  );
};

export default UltimateTicTacToe;
