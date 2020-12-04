import React, { Component } from "react";
import Game from "./game";

export default class Board extends Component {
  render() {
    return (
      <div>
        board js
        <Game x={this.props.x} y={this.props.y} />
      </div>
    );
  }
}
