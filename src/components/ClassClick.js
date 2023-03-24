import React, { Component } from "react";

export class ClassClick extends Component {
  clickHandler() {
    console.log("button clicked well");
  }

  render() {
    return <button onClick={this.clickHandler}>Click me</button>;
  }
}

export default ClassClick;
