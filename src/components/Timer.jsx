import React, { Component } from "react";
import moment from "moment";
import "moment/locale/ko";
moment.locale("ko");

const TIME_FORMAT = "A hh:mm";

class Timer extends Component {
  constructor(props) {
    super(props); //항상 super를 사용한 뒤에만 this를 사용할 수 있다.

    this.state = {
      date: moment()
    };

    this.nTimer = setInterval(() => {
      this.setState({
        date: moment()
      });
    }, 1000);

    this.TIME_FORMAT = "A ss";
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (
      this.state.date.format(TIME_FORMAT) !== nextState.date.format(TIME_FORMAT)
    )
      return false;
    else return true;
  }

  handleTick = () => {
    //console.log(1);
    this.forceUpdate(); //강제업데이트
  };

  render() {
    //console.log("render...");
    const { expireDate, onComplete } = this.props;
    const { date } = this.state;

    if (moment(expireDate) < date) {
      setTimeout(() => {
        onComplete && onComplete(); // props로 들어오면 && 뒤의 onComplete()실행
      }, 1000);
      return <div>만료시간입니다. 종료되었습니다.</div>;
    }

    return (
      <div>
        <div> 현지시간은 오후 {date.format(TIME_FORMAT)} </div>
        <div>{moment(expireDate).fromNow()}에 강의 종료합니다. </div>
      </div>
    );
  }

  componentWillUnmount() {
    if (this.nTimer) {
      clearInterval(this.nTimer);
      this.nTimer = null;
    }
  }
}

export default Timer;
