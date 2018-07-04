import React, { Component } from "react";

import Todos from ".components/Todos";
const styles = {
  textAlign: "left",
  padding: "20px",
  border: "1px solid #ccc",
  margin: "5px"
};

const ulStyles = {
  listStyle: "none"
};

const TodoListItem = ({ todoItem }) => {
  console.log("ddd" + todoItem);
  return (
    <li>
      <label>
        <input type="checkbox" />
        {todoItem}
      </label>
    </li>
  );
};

const LectureGoalList = props => {
  return (
    <div style={styles}>
      <div>{props.title}</div>
      <ul style={ulStyles}>
        {props.items.map((item, idx) => {
          return <Todos key={idx} item={item} />;
        })}
      </ul>
    </div>
  );
};

export default LectureGoalList;
