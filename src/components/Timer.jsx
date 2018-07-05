import React, { PureComponent } from "react";
import moment from "moment";
import "moment/locale/ko";
moment.locale("ko");

const TIME_FORMAT = "A hh:mm";

class Timer extends PureComponent {
  constructor(props) {
    console.log("constructor: 타이머 생성");
    super(props); //항상 super를 사용한 뒤에만 this를 사용할 수 있다.

    this.state = {
      date: moment(),
      expireDate: props.expireDate
    };

    // this.nTimer = setInterval(() => {
    //   this.setState({
    //     date: moment()
    //   });
    // }, 1000);

    // this.TIME_FORMAT = "A ss";
  }

  static getDerivedStateFromProps(props, state) {
    //자식생성시 key값을 줄 경우, 라이프사이클에서
    //마운트를 재진행하므로 아예 새로 그리게 한다.
    //그러면 이 함수를 사용할 필요가 없다.
    return {
      expireDate: props.expireDate
    };
  }

  // "PURE COMPONENT"를 상속받을 경우 아래의 shoudComponentUpdate함수 없이,
  // 자동으로 렌더링가능
  //
  // shouldComponentUpdate(nextProps, nextState) {
  //   if (
  //     this.state.date.format(TIME_FORMAT) !== nextState.date.format(TIME_FORMAT)
  //   )
  //     return false;
  //   else return true;
  // }

  // handleTick = () => {
  //   //console.log(1);
  //   this.forceUpdate(); //강제업데이트
  // };

  render() {
    console.log("자식 Timer render...");
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
    //이와 같이 자식이 key를 받아서 새로 Mount(그리게)하는 것이 좋다.
    console.log("componentWillUnmount : 타이머 언마운트");
    if (this.nTimer) {
      clearInterval(this.nTimer);
      this.nTimer = null;
    }
  }
}

export default Timer;
