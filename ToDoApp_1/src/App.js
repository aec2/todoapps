import React, { useState, useEffect, useRef } from "react";
import { useToDoLayerValue } from "./context/ToDoContext";
import ToDoList from "./components/ToDoList";
import "./App.css";

const App = () => {
  const [{ todos }, dispatch] = useToDoLayerValue();
  const [content, setContent] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!content && content.length < 1) return null;

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
          ref={inputRef}
        ></input>
        <button className="todo-button">Ekle</button>
      </form>
      {/* TODO: Todo listesi */}
      <ToDoList todos={todos} />
    </div>
  );
};

export default App;
