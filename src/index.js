import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

const Test1 = <div> 이것도 컴포넌트이다! </div>;

const Test2 = () => {
  return <div> 이것도 컴포넌트이다! </div>;
};

//console.log(Test1, Test2, <Test2 />, Test2());

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
