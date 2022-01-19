import React from "react";
import ToDo from "./ToDo";

const ToDoList = ({ todos }) => {
  return (
    <div className="todo-list">
      {todos && todos.map((todo) => <ToDo key={todo.id} todo={todo} />)}
    </div>
  );
};

export default ToDoList;
