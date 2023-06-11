import { useDispatch } from 'react-redux'
import { setTodoError } from "../features/slice/todoSlice";

export default function Header() {
  const dispatch = useDispatch()

  const hdlToast = () => {
    dispatch(setTodoError(Date.now()))
  }

  return (
    <div className="navbar bg-base-100">
  <div className="flex-1">
    <p className="btn btn-ghost normal-case text-xl text-left">ทูดูลิสต์</p>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li onClick={hdlToast}><p>test Toast</p></li>
      <li tabIndex={0}>
        <p>
          Parent
          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </p>
        <ul className="p-2 bg-base-100">
          <li><p>Submenu 1</p></li>
          <li><p>Submenu 2</p></li>
        </ul>
      </li>
      <li><p>Item 3</p></li>
    </ul>
  </div>
</div>
  )
}
