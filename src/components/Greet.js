/* eslint-disable no-unreachable */
import React, { Component } from "react";

export class Greet extends Component {
  constructor() {
    super();
    this.state = {
      message: "welcome gokul",
    };
  }

  changeMessage() {
    this.setState({
      message: "thank you for subscribing!",
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.changeMessage()}>Subscribe me</button>
      </div>
    );
  }
}

export default Greet;
