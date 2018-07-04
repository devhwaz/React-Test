import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import LectureGoalList from "./components/LectureGoalList";
import Timer from "./components/Timer";

const goals = [
  "1. react 개발환경에 대한 이해",
  "2. 새로운 자바스크립트 문법을 익힌다.",
  "3. 개발 편의를 위한 VSCode IDE를 익힌다."
];

class App extends Component {
  state = {
    isExpired: true
  };
  /*
  constructor(props){
    super(props);
    this.state= {
      x : 1
    }
    this.handleClick = this.handleClick.bind(this);
  }*/

  handleClick = e => {
    console.log(e.target);
  };

  handleComplete = () => {
    //자식이 종료되고 1초 후에..
    this.setState({ isExpired: false });
    console.log("타이머로부터 호출받음");
  };

  render() {
    //const isExpired = moment("2018-07-04T17:00:00+09:00") < moment();
    const { isExpired } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img
            onClick={this.handleClick}
            src={logo}
            className="App-logo"
            alt="logo"
          />
          <h1 className="App-title">Welcome to React gggggg</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <LectureGoalList items={goals} title={"강의목표"} />
        {isExpired && (
          <Timer
            expireDate={"2018-07-04T16:17:00+09:00"}
            onComplete={this.handleComplete}
          />
        )}
      </div>
    );
  }
}

export default App;
