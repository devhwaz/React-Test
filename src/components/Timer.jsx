import React, { Component } from "react";
import moment from "moment";
import "moment/locale/ko";
moment.locale();

const TIME_FORMAT = "A hh:mm";
class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: moment()
    };

    this.nTimer = setInterval(() => {
      this.setState({
        date: moment()
      });
    }, 1000);
  }

  handleTick = () => {
    //console.log(1);
    this.forceUpdate();
  };

  render() {
    //console.log("render....");

    if (moment(this.props.expireDate) < this.state.date) {
      return <div>종료되었습니다.</div>;
    }

    return (
      <div>
        <div> 현지시간은 오후 {this.state.date.format(TIME_FORMAT)} </div>
        <div>{moment(this.props.expireDate).fromNow()}에 강의 종료합니다. </div>
      </div>
    );
  }
}

export default Timer;
