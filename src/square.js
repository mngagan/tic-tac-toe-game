import React, { Component } from "react";

export default class Square extends Component {
  render() {
    return (
      <div
        className="singleSquare"
        onClick={() => console.log(this.props.x + 1, this.props.y + 1)}
      />
    );
  }
}
