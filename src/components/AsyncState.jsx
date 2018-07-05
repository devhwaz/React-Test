import React, { Component } from "react";

class AsyncState extends Component {
  state = {
    counter: 0
  };
  render() {
    return <div>{this.state.counter}</div>;
  }
  componentDidMount = () => {
    //출력4를 원하지만 비동기배치되므로 3이 출력됨.
    //해결하기위해 setState내부에 함수를 넣는다.
    /*
    this.setState({ counter: this.state.counter++ });
    this.setState({ counter: this.state.counter++ });
    this.setState({ counter: this.state.counter++ });
    this.setState({ counter: this.state.counter++ });
    */
    this.setState((prevState, props) => ({
      counter: prevState.counter + 1
    }));
    this.setState((prevState, props) => ({
      counter: prevState.counter + 1
    }));
    this.setState((prevState, props) => ({
      counter: prevState.counter + 1
    }));
    this.setState((prevState, props) => ({
      counter: prevState.counter + 1
    }));
  };
}

export default AsyncState;
