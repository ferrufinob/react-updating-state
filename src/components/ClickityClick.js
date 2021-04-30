import React, { Component } from "react";

export default class ClickityClick extends Component {
  constructor() {
    super();
    this.state = {
      hasBeenClicked: false,
      count: 0,
    };
  }

  handleClick = () => {
    this.setState(
      (previousState) => {
        return {
          hasBeenClicked: !previousState.hasBeenClicked,
          count: previousState.count + 1,
        };
      },
      () => console.log(this.state.hasBeenClicked)
    );
  };
  render() {
    return (
      <div>
        <p>I have {this.state.hasBeenClicked ? null : "not"} been clicked!</p>
        <button onClick={this.handleClick}>{this.state.count} Click me!</button>
      </div>
    );
  }
}
