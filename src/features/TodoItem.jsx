import {useState} from "react";
import { useDispatch } from "react-redux";
import { removeTodo, changeTodo } from "./slice/todoSlice";
import { toast } from "react-toastify";

export default function TodoItem(props) {
  const {job} = props
  const dispatch = useDispatch()
  const [editMode, setEditMode] = useState(false)
  const [title, setTitle] = useState(job?.title)

  const hdlDelete = () => {
    dispatch(removeTodo(job.id)).unwrap()
    .then( _ => toast.success(`delete id : ${job.id} done..`))
    .catch( err => toast.error(`cannot delete id : ${job.id}`))
  }

  const hdlUpdate = () => {
    dispatch(changeTodo({...job, title})).unwrap()
    .then( _=> toast.success('Update done..'))
    .catch( err => toast.error('Nothing change due to ' + err.message))
    setEditMode(false)
  }
  return (
    <div className="form-control grow">
      <label className="input-group">
        <input
          type="text"
          placeholder="Todo-item"
          className="input input-bordered grow"
          value={title}
          disabled={!editMode}
          onChange={e=>setTitle(e.target.value)}
        />
        { !editMode ? <span className="bg-violet-600 btn" onClick={()=>setEditMode(true)}>Edit</span>
            : <span className="bg-violet-600 btn" onClick={hdlUpdate}>Ok</span>
        }
        
        <span className="bg-pink-600 btn" onClick={hdlDelete}>Delete</span>
      </label>
    </div>
  );
}
