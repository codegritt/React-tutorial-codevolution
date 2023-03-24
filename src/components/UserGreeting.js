import React, { Component } from "react";

export class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedin: true,
    };
  }
  //   render() {
  //     if (this.state.isLoggedin) {
  //       return <div>Welcome Gokul</div>;
  //     } else {
  //       return <div>Welcome Guest</div>;
  //     }
  //   }

  //   render() {
  //     let message;
  //     if (this.state.isLoggedin) {
  //       message = <div>Welcome Gokul</div>;
  //     } else {
  //       message = <div>Welcome Guest</div>;
  //     }
  //     return <div>{message}</div>;
  //   }

  //   render() {
  //     return this.state.isLoggedin ? (
  //       <div>Welcome Gokul</div>
  //     ) : (
  //       <div>Welcome Guest</div>
  //     );
  //   }

  render() {
    return this.state.isLoggedIn && <div>Welcome Gokul</div>;
  }
}

export default UserGreeting;
