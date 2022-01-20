import clsx from "clsx";
import React, { useState } from "react";
import { GrFormClose, GrFormEdit, GrFormCheckmark } from "react-icons/gr";
import { useToDoLayerValue } from "../context/ToDoContext";

const ToDo = ({ todo }) => {
  const [{}, dispatch] = useToDoLayerValue();
  const [editable, setEditable] = useState(false);
  const [content, setContent] = useState(todo.content);

  function handleRemoveToDo(todoId) {
    dispatch({
      type: "REMOVE_TODO",
      payload: todoId,
    });
  }
  function handleCompleteToDo(todoId) {
    dispatch({
      type: "COMPLETE_TODO",
      payload: todoId,
    });
  }
  function handleUpdateToDo({ todoId, newValue }) {
    dispatch({ type: "UPDATE_TODO", payload: { todoId, newValue } });
  }

  const todoStyle = clsx({
    ["todo-row"]: true,
    ["completed"]: todo.isCompleted,
  });

  return (
    <div className={todoStyle}>
      <div onClick={() => (editable ? "" : handleCompleteToDo(todo.id))}>
        {editable ? (
          <input
            type="text"
            value={content}
            onChange={(event) => setContent(event.target.value)}
            className="todo-input-edit"
          />
        ) : (
          todo.content
        )}
      </div>
      <div className="todo-icons">
        <GrFormClose
          className="todo-icon"
          onClick={() => handleRemoveToDo(todo.id)}
        />
        {editable ? (
          <GrFormCheckmark
            className="todo-icon"
            onClick={() => {
              handleUpdateToDo({ todoId: todo.id, newValue: content });
              setEditable(false);
              setContent("");
            }}
          />
        ) : (
          <GrFormEdit className="todo-icon" onClick={() => setEditable(true)} />
        )}
      </div>
    </div>
  );
};

export default ToDo;
