import React from "react";
import _ from "lodash";
import { useNavigate } from "react-router-dom";

const UltimateTicTacToe: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div onClick={() => navigate(-1)}>Back</div>
      <div>ultimate tic tac toe</div>
    </div>
  );
};

export default UltimateTicTacToe;
