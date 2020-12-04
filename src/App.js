import React from "react";
import "./style.css";
import Board from "./board";
import Game from "./game";
import _ from "underscore";

// export default function App() {
const boardX = 3;
const boardY = 3;
export default class Board extends React.Component {
  state = {
    entries: [],
    turn: "x",
    players: ["x", "o"]
  };

  onSquareCliked = ({ x, y }) => {
    let { entries, turn } = this.state;
    //check if the aquare is clicked for the second time
    let isClikedSecondTime = entries.filter(
      entry => entry.x == x && entry.y == y
    );
    isClikedSecondTime = isClikedSecondTime.length ? true : false;
    if (isClikedSecondTime) {
      // alert("error found");
      return;
    }
    entries.push({ x, y, value: turn });
    let earlierTurn = turn;
    turn = turn == "x" ? "o" : "x";
    this.setState({ entries, turn });
    this.checkIfWon(earlierTurn, x, y);
  };

  checkIfWon = (earlierTurn, x, y) => {
    //considering it is always a square
    let turn = earlierTurn;
    let combinationsToCheck = [];

    //check horizontally
    let { entries } = this.state;
    let isHorizontal = entries.filter(entry => entry.x == x);
    if (isHorizontal.length == boardX) {
      isHorizontal = isHorizontal.filter(value => value.value != earlierTurn);
      if (!isHorizontal.length) {
        this.setState({ message: earlierTurn + " WON" });
      }
    }

    // .filter(value => value.value != earlierTurn || value.value != "");
    // console.log(
    //   "ins horizontal ",
    //   isHorizontal.length,
    //   entries,
    //   x,
    //   earlierTurn
    // );
    // if (!isHorizontal.length) {
    //   alert("won");
    // }

    //check horizontal and vertical boxes of the last clicked location
  };

  render() {
    return (
      <div>
        <h1>Tic tac toe</h1>
        <p>Start editing to see some magic happen :)</p>
        <h1>TURN {this.state.turn}</h1>
        <h1>{this.state.message}</h1>
        <Board
          x={boardX}
          y={boardY}
          onSquareCliked={this.onSquareCliked}
          entries={this.state.entries}
        />
      </div>
    );
  }
}
