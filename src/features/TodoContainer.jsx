
import React, { useEffect, useState } from 'react'
import {getTodo, addTodo, updateTodo, deleteTodo} from '../api/todoApi'
// import {useQuery, useMutation, useQueryClient} from 'react-query'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

export default function TodoContainer() {
  const [allTodo, setAllTodo] = useState([])
  const [haveEdit, setHaveEdit] = useState(false)
  useEffect(() => {
    getTodo().then(data => {
      console.log(data)
      setAllTodo(data)
    })
  }, [haveEdit])
  
  return (
    <>
      <TodoForm />
      <TodoList allTodo={allTodo} setHaveEdit={setHaveEdit}/>
    </>
  )
}
