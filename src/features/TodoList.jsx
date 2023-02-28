import React from "react";
import { useTodo } from "../contexts/todoContext";
import TodoItem from "./TodoItem";

export default function TodoList(props) {
  const { allTodo } = useTodo();
  return (
    <div className="flex flex-col mt-4 gap-1">
      {allTodo.map((el) => (
        <TodoItem key={el.id} todo={el} />
      ))}
    </div>
  );
}
