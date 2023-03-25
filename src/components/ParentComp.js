import React, { Component } from "react";
import MemoComp from "./MemoComp";

class ParentComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Vishwas",
    };
  }

  componentDidMount() {
    // setInterval(() => {
    this.setState({
      name: "Gokul",
    });
    // }, 2000);
  }

  render() {
    console.log("*********Parent Comp render************");
    return (
      <div>
        {/* <RegComp name={this.state.name} />
				<PureComp name={this.state.name} /> */}
        <MemoComp name={this.state.name} />
      </div>
    );
  }
}

export default ParentComp;
