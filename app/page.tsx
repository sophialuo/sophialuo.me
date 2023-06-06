"use client";

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages";
import UltimateTicTacToe from "./pages/ultimate-tic-tac-toe";
import "./page.css";

const App: React.FC = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
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