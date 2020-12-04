import React from "react";
import "./style.css";
import Board from "./board";
import Game from "./game";

// export default function App() {
export default class Board extends React.Component {
  state = {
    entries: [],
    turn: "x",
    players: ["x", "o"]
  };

  onSquareCliked = ({ x, y }) => {
    console.log("in square clicked", x, y);
    let { entries, turn } = this.state;
    //check if the aquare is clicked for the second time
    let isClikedSecondTime = entries.filter(
      entry => entry.x == x && entry.y == y
    );
    isClikedSecondTime = isClikedSecondTime.length ? true : false;
    console.log({ entries, x, y });
    if (isClikedSecondTime) {
      alert("error found");
      return;
    }
    entries.push({ x, y, value: turn });
    turn = turn == "x" ? "o" : "x";
    this.setState({ entries, turn });
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <h1>Tic tac toe</h1>
        <p>Start editing to see some magic happen :)</p>
        <h1>TURN {this.state.turn}</h1>
        <Board
          x={5}
          y={5}
          onSquareCliked={this.onSquareCliked}
          entries={this.state.entries}
        />
      </div>
    );
  }
}
