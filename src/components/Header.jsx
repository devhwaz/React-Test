import React, { PureComponent } from "react";
import logo from "../logo.svg";

class Header extends PureComponent {
  state = {
    classNameStr: "App-logo rotate",
    rotate: true,
    logoMsg: "Welcome to React"
  };

  handleClick = e => {
    if (this.state.rotate === false) {
      this.setState({
        classNameStr: "App-logo rotate",
        rotate: true,
        logoMsg: "Welcome to React"
      });
    } else {
      this.setState({
        classNameStr: "App-logo",
        rotate: false,
        logoMsg: "Stop React"
      });
    }

    //document.getElementById("reactLogo").className.toggle;
  };

  render() {
    const { classNameStr, logoMsg } = this.state;

    return (
      <div>
        <header className="App-header">
          <img
            id="reactLogo"
            onClick={this.handleClick}
            src={logo}
            className={classNameStr}
            alt="logo"
          />
          <h1 className="App-title">{logoMsg}</h1>
        </header>
      </div>
    );
  }
}

export default Header;
