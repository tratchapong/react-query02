import React,{useState} from "react";


export default function TodoItem(props) {
  const {job} = props
  const [editMode, setEditMode] = useState(false)
  return (
    <div className="form-control grow">
      <label className="input-group">
        <input
          type="text"
          placeholder="Todo-item"
          className="input input-bordered grow"
          value={job.title}
          disabled={!editMode}
        />
        { !editMode ? <span className="bg-violet-600 btn" onClick={()=>setEditMode(true)}>Edit</span>
            : <span className="bg-violet-600 btn" onClick={()=>setEditMode(false)}>Ok</span>
        }
        
        <span className="bg-pink-600 btn">Delete</span>
      </label>
    </div>
  );
}
