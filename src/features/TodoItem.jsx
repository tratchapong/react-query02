import React,{useState} from "react";
import {updateTodo, deleteTodo} from "../api/todoApi";


export default function TodoItem(props) {
  const {todo, setHaveEdit} = props
  const [completed, setCompleted] = useState(todo.completed)
  const [title, setTitle] = useState(todo.title)
  const [editMode, setEditMode] = useState(false)

  const hdlEditOk = () => {
      const newTodo = {...todo, title, completed}
      updateTodo(newTodo)
      setEditMode(false)
      setHaveEdit(prv => !prv)
  }
  return (
    <div className="form-control flex-row grow">
      {editMode && <input type="checkbox" checked={completed} className="checkbox checkbox-primary" onChange={()=>setCompleted(!completed)} />}
      <label className="input-group">
        <input
          type="text"
          placeholder="Todo-item"
          className={`input input-bordered grow ${todo.completed? 'bg-lime-200' : ''}`}
          // disabled={!editMode}
          readOnly={!editMode}
          value={title}
          onChange={(e)=>setTitle(e.target.value)}
        />
        { !editMode ? <span className="bg-violet-600 btn" onClick={()=>setEditMode(true)}>Edit</span>
            : <span className="bg-violet-600 btn" onClick={hdlEditOk}>Ok</span>
        }
        
        <span className="bg-pink-600 btn">Delete</span>
      </label>
    </div>
  );
}
