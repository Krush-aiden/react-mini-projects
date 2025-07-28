import { Component } from "react";

class Counter extends Component {
  // constructor(){
  //   super()
  // }
  componentDidMount = () => {
    console.log("component did Mount in Counter");
  };

  componentDidUpdate = (prevProps, prevState) => {
    console.log("🚀 ~ Counter ~ prevProps.number :", prevProps.number);
    console.log("🚀 ~ Counter ~ this.props.number:", this.props.number);
    if (prevProps.number !== this.props.number) {
      console.log("component did Update");
    }
  };

  componentWillUnmount = () => {
    console.log("Component removed");
  };

  render() {
    return (
      <div>
        <div>{this.props.number}</div>
      </div>
    );
  }
}

export default Counter;
