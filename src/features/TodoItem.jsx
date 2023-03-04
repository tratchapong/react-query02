import React, { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { updateTodo, deleteTodo } from "../api/todoApi";

export default function TodoItem(props) {
  const { todo } = props;
  const queryClient = useQueryClient();
  const [editMode, setEditMode] = useState(false);
  const [title, setTitle] = useState(todo.title);
  const [completed, setCompleted] = useState(todo.completed);

  const updateTodoMutation = useMutation(updateTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    },
  });

  const deleteTodoMutation = useMutation(deleteTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    },
  });

  const hdlOKClick = () => {
    let okToUpdate = false;
    setEditMode(false);
    okToUpdate =
      (title.trim() !== "" && title.trim() !== todo.title.trim()) || completed !== todo.completed;
    if (okToUpdate)
      updateTodoMutation.mutate({
        ...todo,
        title,
        completed,
      });
  };

  const hdlDeleteClick = () => {
    deleteTodoMutation.mutate({
      id: todo.id,
    });
  };

  return (
    <div className="form-control grow">
      <label className="input-group">
        <input
          type="text"
          placeholder="Todo-item"
          className={`input input-bordered grow ${completed ? "bg-lime-200" : ""}`}
          readOnly={!editMode}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        {!editMode ? (
          <span className="bg-violet-600 btn" onClick={() => setEditMode(true)}>
            Edit
          </span>
        ) : (
          <>
            <input
              type="checkbox"
              checked={completed}
              className="checkbox checkbox-primary self-center mx-1 rounded"
              onChange={() => setCompleted(!completed)}
            />
            <span className="bg-violet-600 btn" onClick={hdlOKClick}>
              Ok
            </span>
          </>
        )}

        <span className="bg-pink-600 btn" onClick={hdlDeleteClick}>
          Delete
        </span>
      </label>
    </div>
  );
}
