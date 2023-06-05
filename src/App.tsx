import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, UltimateTicTacToe } from "./components";
import "./App.css";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path={`/ultimate-tic-tac-toe`}
              element={<UltimateTicTacToe />}
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
