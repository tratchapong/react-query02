import React from "react";
import {useSelector} from 'react-redux'
import { selectAllTodo } from "./slice/todoSlice";
import TodoItem from "./TodoItem";

export default function TodoList() {
  // const allTodo = useSelector(selectAllTodo)
  const allTodo = useSelector(state => state)
  console.log(allTodo)
  return (
    <div className="flex flex-col mt-4 gap-1">
      <p>{JSON.stringify(allTodo)}</p>
      <TodoItem />
      <TodoItem />

    </div>
  );
}
