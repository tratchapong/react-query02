import React, { useState } from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

export default function TodoContainer() {
  const [page, setPage] = useState(1);
  return (
    <>
      <TodoForm setPage={setPage}/>
      <TodoList page={page} setPage={setPage}/>
    </>
  )
}
