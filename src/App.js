import React from "react";
import "./style.css";
import Board from "./board";
import Game from "./game";

export default function App() {
  return (
    <div>
      <h1>Tic tac toe</h1>
      <p>Start editing to see some magic happen :)</p>
      <Board x={5} y={5} />
    </div>
  );
}
