import React, {useState} from "react";
import {useMutation, useQueryClient} from 'react-query'
import { addTodo,} from '../api/todoApi'

export default function TodoForm() {
  const queryClient = useQueryClient()
  const [title, setTitle] = useState('')
  
  const addTodoMutation = useMutation(addTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries('todos')
    }
  })

  const hdlAddClick = ()=> {
    let newTitle = title.trim()
    if(newTitle !== '') 
      addTodoMutation.mutate({
        title : newTitle, completed : false, userId: 1
      })
    setTitle('')
  } 
  
  return (
    <div className="flex">
      <div className="form-control grow ">
        <div className="input-group">
          <input
            type="text"
            placeholder="Add new…"
            className="input input-bordered grow"
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
          />
          <button 
            className="btn btn-square bg-slate-500"
            onClick={hdlAddClick}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g
                stroke="#ccc"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 12h12M12 18V6" />
              </g>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
