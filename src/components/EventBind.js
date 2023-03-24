import React, { Component } from "react";

class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello",
    };
  }

  clickHandler() {
    this.setState({
      message: "goodbye",
    });
    console.log(this);
  }
  //   render() {
  //     return (
  //       <div>
  //         <div>{this.state.message}</div>
  //         <button onClick={this.clickHandler.bind(this)}>Click me</button>
  //       </div>
  //     );
  //   }
  // }

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        <button onClick={() => this.clickHandler()}>Click me</button>
      </div>
    );
  }
}
export default EventBind;
