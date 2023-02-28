import React from "react";
import {useQuery} from 'react-query'
import { getTodo} from '../api/todoApi'
import TodoItem from "./TodoItem";

export default function TodoList() {

  const {
    isLoading,
    isError,
    error,
    data: todos
  } = useQuery('todos', getTodo , {
    select : (data) => data.sort( (a,b) => b.id - a.id)
  })

  return (
    <div className="flex flex-col mt-4 gap-1">
      {isLoading && <h1>Loading...</h1>}  
      {isError && <h1>Error : {error.message}</h1>}
      {todos && todos.map(el => (
        <TodoItem key={el.id} todo={el}/>
        ))}
    </div>
  );
}
