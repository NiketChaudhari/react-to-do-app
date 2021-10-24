import React, { useState } from "react";
import TodoList from "./components/ToDoList";
import "./styles.css";

const ToDo = () => {
  const [inputText, setInputText] = useState("");

  const [itemList, setItemList] = useState([]);

  const input_text_changed = (e) => {
    setInputText(e.target.value);
  };

  const add_button_clicked = () => {
    if (inputText === "") {
      alert("Task name should not be blank !");
    } else {
      setItemList([...itemList, inputText]);
      setInputText("");
    }
  };

  const removeTodo = (id) => {
    const newitemList = itemList.filter((item, index) => index !== id);
    setItemList(newitemList);
  };

  return (
    <div className="main_div">
      <div className="heading">
        <h1>My ToDo App</h1>
      </div>

      <div className="search_div">
        <input
          type="text"
          placeholder="Add Task..."
          className="input_tag"
          onChange={input_text_changed}
          value={inputText}
        />
        <button className="add_button_tag" onClick={add_button_clicked}>
          Add
        </button>
      </div>

      <TodoList items={itemList} delete_item={removeTodo} />
    </div>
  );
};

export default ToDo;
