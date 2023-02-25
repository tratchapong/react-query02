import React, { useState } from "react";

export default function TodoForm(props) {
  const {hdlAdd} = props
  const [title, setTitle] = useState('')

  const hdlSubmit = () => {
    hdlAdd(title)
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
          <button className="btn btn-square bg-slate-500" onClick={hdlSubmit}>
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
