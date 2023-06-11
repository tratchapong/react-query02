import {useState} from "react";
import { useDispatch } from "react-redux";
import {toast} from 'react-toastify'
import { addNewTodo} from "./slice/todoSlice";

export default function TodoForm() {
  const dispatch = useDispatch()
  const [title, setTitle] = useState('')
  const hdlAdd = () => {
    if(!title.trim()) 
      return toast.error('cannot add blank input..', {
        position: 'top-right', autoclose: 500,
      })
    let input = {userId: 1, title, completed: false}
    dispatch(addNewTodo(input)).unwrap().catch( err => {
      toast.error(err.message)
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
            onChange={e=>setTitle(e.target.value)}
          />
          <button className="btn btn-square bg-slate-500" onClick={hdlAdd}>
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
