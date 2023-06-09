import {useEffect} from "react";
import {useSelector, useDispatch} from 'react-redux'
import { fetchTodo, selectAllTodo } from "./slice/todoSlice";
import TodoItem from "./TodoItem";

export default function TodoList() {
  // const allTodo = useSelector(selectAllTodo)
  const dispatch = useDispatch()
  const allTodo = useSelector(state => state.todo.data)
  useEffect( () => {
    dispatch(fetchTodo())
  }, [])

  return (
    <div className="flex flex-col mt-4 gap-1">
      {allTodo?.map(el => (
        <TodoItem key={el.id} job={el}/>
      ))
   }
      

    </div>
  );
}
