import React, { Component } from "react";
import "./Classcount.css";

class Classcount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  handleIncrease = () => {
    this.setState({ count: this.state.count + 1 });
  };

  handleDecrease = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div className="classcount">
        <h1>CLASS COMPONENT</h1>

        <h2>{this.state.count}</h2>

        <button onClick={this.handleIncrease}>handleIncrease</button>
        <button onClick={this.handleDecrease}>handleDecrease</button>
      </div>
    );
  }
}

export default Classcount;
