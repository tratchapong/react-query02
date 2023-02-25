import React from 'react'
import {useQuery, useMutation, useQueryClient} from 'react-query'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

export default function TodoContainer() {
  return (
    <>
      <TodoForm />
      <TodoList />
    </>
  )
}
