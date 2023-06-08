import {createSlice} from '@reduxjs/toolkit'

const initialState = [
  { id: 1, title: 'Todo 01'},
  { id: 2, title: 'Todo 02'},
  { id: 3, title: 'Todo 03'},
]

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers : {}
})

console.log(todoSlice.reducer)


export const selectAllTodo = (state) => state.todo

export default todoSlice.reducer