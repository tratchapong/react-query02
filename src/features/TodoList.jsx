import { useEffect} from "react";
import {useSelector, useDispatch} from 'react-redux'
import { fetchTodo } from "./slice/todoSlice";
import TodoItem from "./TodoItem";

export default function TodoList() {

  const dispatch = useDispatch()
  const allTodo = useSelector(state => state.todo.data)
  const todoLoading = useSelector(state => state.todo.loading)
  const todoError = useSelector(state => state.todo.error)

  useEffect( () => {
    dispatch(fetchTodo())
  }, [dispatch])

  return (
    <div className="flex flex-col mt-4 gap-1">
      {todoLoading && <p>Loading data...</p>}
      {todoError && <p>{todoError.message}</p>}
      {allTodo?.map(el => (
        <TodoItem key={el.id} job={el}/>
        ))
      }
    </div>
  );
}
