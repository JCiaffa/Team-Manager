import React from "react";
import { Routes, Route, Navigate, Link } from "react-router-dom";
import "./App.css";
import IndexView from "./views/indexView";
import CreateView from "./views/createView";
import PlayerStatusView from "./views/playerStatusView";

function App() {
  return (
    <div>
      <Routes>
        <Route element={<Navigate to="/list/" />} path="/" />
        <Route element={<IndexView />} path="/list/" />
        <Route element={<CreateView />} path="/players/create" />
        <Route element={<PlayerStatusView />} path="/status/game/:game/" />
      </Routes>
    </div>
  );
}

export default App;
