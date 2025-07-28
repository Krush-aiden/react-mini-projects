/* eslint-disable no-labels */
/* eslint-disable no-unused-labels */
/* eslint-disable no-unused-expressions */
import React, { Component } from "react";
import Counter from "./components/Counter";
import Counter1 from "./components/Counter1";

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      showCompo: true,
    };
  }

  increment = () => {
    this.setState((prev) => {
      console.log(prev);
      return { count: this.state.count + 1 };
    });
    console.log("🚀 ~ App ~ render ~ this.state.count:", this.state.count);
  };

  componentDidMount = () => {
    console.log("component did Mount");
  };

  removeCompo = () => {
    return this.setState({ showCompo: false });
  };

  render() {
    return (
      <div>
        {this.state.showCompo ? <Counter number={this.state.count} /> : ""}
        {this.state.showCompo ? <Counter1 number={this.state.count} /> : ""}
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.removeCompo}>Remove Component</button>
      </div>
    );
  }
}

export default App;
