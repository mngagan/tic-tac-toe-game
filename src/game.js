import React, { Component } from "react";
import Square from "./square";
export default class Game extends Component {
  render() {
    let x = Array(this.props.x).fill("x");
    let y = Array(this.props.y).fill("y");
    console.log(x, y);
    return (
      <div>
        Game js
        {y.map((singleY, yIndex) => {
          return (
            <div className="row">
              {x.map((singleX, xIndex) => {
                return (
                  <Square
                    x={xIndex}
                    y={yIndex}
                    onSquareCliked={this.props.onSquareCliked}
                    entries={this.props.entries}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
    );
  }
}
