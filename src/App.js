import React, { useState } from "react";
import { useToDoLayerValue } from "./context/ToDoContext";
import ToDoList from "./components/ToDoList";

const App = () => {
  const [{ todos }, dispatch] = useToDoLayerValue();
  const [content, setContent] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!content) return null;

    const newToDo = {
      id: Math.floor(Math.random() * 4288978435),
      content,
      isCompleted: false,
    };

    dispatch({
      type: "ADD_TODO",
      payload: newToDo,
    });

    setContent("");
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="todo-form">
        <input
          type="text"
          className="todo-input"
          onChange={(event) => setContent(event.target.value)}
          value={content}
        ></input>
        <button className="todo-button">Ekle</button>
      </form>
      {/* TODO: Todo listesi */}
      {/* <ToDoList todos={todos} /> */}
    </div>
  );
};

export default App;
