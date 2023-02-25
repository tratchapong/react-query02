
import React, { useEffect, useState } from 'react'
import {getTodo, addTodo} from '../api/todoApi'
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

  const hdlAdd = (title) => {
    if (title.trim()==='')
      return
    let newTodo = { title, completed : false, userId: 1}
    addTodo(newTodo)
    setHaveEdit(prv => !prv)
  }
  
  return (
    <>
      <TodoForm hdlAdd={hdlAdd} />
      <TodoList allTodo={allTodo} setHaveEdit={setHaveEdit}/>
    </>
  )
}
