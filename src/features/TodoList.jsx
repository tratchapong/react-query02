import React from "react";
import TodoItem from "./TodoItem";

export default function TodoList() {
  return (
    <div className="flex flex-col mt-4 gap-1">
      <TodoItem />
      <TodoItem />

    </div>
  );
}
