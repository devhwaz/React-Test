import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Timer from "./components/Timer";
import "antd/dist/antd.css";
import Todos from "./components/Todos";

const goals = [
  { title: "1. react 개발환경에 대한 이해", completed: true },
  { title: "2. 새로운 자바스크립트 문법을 익힌다.", completed: true },
  { title: "3. 개발 편의를 위한 VSCode IDE를 익힌다.", completed: false },
  { title: "4. 기본적인 Git 사용법을 익힌다", completed: false },
  { title: "5. PR코드리뷰", completed: true }
];

class App extends Component {
  state = {
    isExpired: true,
    dateStr: "2018-07-05T18:00:00+09:00"
  };

  constructor(props) {
    super(props);
    // # 클래스에서 this바인딩하는 방법
    // 1. function.bind함수를 이용해 직접 바인딩
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick2 = () => {
    // # 클래스에서 this바인딩하는 방법
    // 2. 핸들러 안에서 arrow함수를 이용하는 방법
  };

  handleClick = e => {
    console.log(e.target);
  };

  handleComplete = () => {
    //자식이 종료되고 1초 후에..
    this.setState({ isExpired: false });
    console.log("타이머로부터 호출받음");
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        dateStr: "2018-07-05T16:00:00+09:00"
      });
    }, 5000);
  }

  render() {
    //const isExpired = moment("2018-07-04T17:00:00+09:00") < moment();
    const { isExpired, dateStr } = this.state;
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
        <Todos items={goals} title={"강의목표"} />
        {isExpired && (
          <Timer
            key={dateStr}
            expireDate={dateStr}
            onComplete={this.handleClick}
            // # 클래스에서 this바인딩하는 방법
            // 3. 핸들러 안에서 arrow함수를 이용하는 방법
            //onComplete={e => this.handleClick(e)}
          />
        )}
      </div>
    );
  }
}

export default App;
