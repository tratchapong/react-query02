import {createContext, useState, useEffect, useContext} from 'react'
import {getTodo, addTodo, updateTodo, deleteTodo} from '../api/todoApi'


export const TodoContext = createContext()

export default function TodoContextProvider({children}) {
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

  const hdlUpdate = (todo) => {
    updateTodo(todo)
    setHaveEdit(prv => !prv)
  }

  const hdlDelete = todo => {
    deleteTodo(todo)
    setHaveEdit(prv => !prv)
  }

  return (
    <TodoContext.Provider value={{allTodo, setAllTodo, total: allTodo.length, hdlAdd , hdlUpdate, hdlDelete}}>
      {children}
    </TodoContext.Provider>
  )
}

export const useTodo = () => useContext(TodoContext)