import React, { Component } from "react";

export default class Square extends Component {
  render() {
    let finalObj = this.props.entries.filter(entry => {
      return entry.x == this.props.x + 1 && entry.y == this.props.y + 1;
    });
    let value = ''
    if(finalObj.length){
      value = finalObj[0].value
    }
    return (
      <div
        className="singleSquare"
        // onClick={() => console.log(this.props.x + 1, this.props.y + 1)}
        onClick={() =>
          this.props.onSquareCliked({
            x: this.props.x + 1,
            y: this.props.y + 1
          })
        }
      >
        {value}
      </div>
    );
  }
}
