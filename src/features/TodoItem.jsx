import React, { useState } from "react";
import { useTodo } from "../contexts/todoContext";

export default function TodoItem(props) {
  const { todo } = props;
  const {hdlUpdate, hdlDelete } = useTodo()
  const [completed, setCompleted] = useState(todo.completed);
  const [title, setTitle] = useState(todo.title);
  const [editMode, setEditMode] = useState(false);

  const hdlEditOk = () => {
    setEditMode(false);
    if((title.trim() === todo.title && completed === todo.completed) || title.trim ==='')
      return
    const newTodo = { ...todo, title, completed };
    hdlUpdate(newTodo);
  };

  const hdlDeleteClick = () => {
    if (window.confirm('This item will be Deleted ?')){
      hdlDelete(todo);
    }
  };
  return (
    <div className="form-control flex-row grow">
      {editMode && (
        <input
          type="checkbox"
          checked={completed}
          className="checkbox checkbox-primary"
          onChange={() => setCompleted(!completed)}
        />
      )}
      <label className="input-group">
        <input
          type="text"
          placeholder="Todo-item"
          className={`input input-bordered grow ${
            todo.completed ? "bg-lime-200" : ""
          }`}
          // disabled={!editMode}
          readOnly={!editMode}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        {!editMode ? (
          <span className="bg-violet-600 btn" onClick={() => setEditMode(true)}>
            Edit
          </span>
        ) : (
          <span className="bg-violet-600 btn" onClick={hdlEditOk}>
            Ok
          </span>
        )}

        <span className="bg-pink-600 btn" onClick={hdlDeleteClick}>
          Delete
        </span>
      </label>
    </div>
  );
}
