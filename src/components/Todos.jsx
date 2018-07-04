import { Checkbox } from "antd";
import React from "react";
//import "antd/lib/button/style"; // or antd/lib/button/style/css for css format file

const ListItem = ({ title, completed }) => (
  <li>
    <Checkbox defaultChecked={completed}>{title}</Checkbox>
  </li>
);

const Todos = props => (
  <div className="Todos">
    <div>{props.title}</div>
    <ul>{props.items.map((item, idx) => <ListItem key={idx} {...item} />)}</ul>
  </div>
);

export default Todos;
