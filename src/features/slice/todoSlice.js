import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import {getTodo} from '../../api/todoApi'

const initialState = {
  data : []
}

export const fetchTodo = createAsyncThunk('todo/fetchTodo', async () => await getTodo())

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers : {},
  extraReducers: builder =>  
  builder.addCase( fetchTodo.fulfilled, (state, action) => {
    state.data = action.payload
  })
  .addCase( fetchTodo.rejected, (state, action) => {
    state = action.payload
    console.log('reject')
  })
})


export const selectAllTodo = (state) => state.todo.data

export default todoSlice.reducer