import React from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import "../styles.css";

const TodoList = ({ items, delete_item }) => {
  return items.map((item, index) => (
    <div className="item_list" key={index}>
      <span className="each_item_text">{item}</span>
      <RiCloseCircleLine
        className="each_item_icon"
        onClick={() => delete_item(index)}
      />
    </div>
  ));
};

export default TodoList;
