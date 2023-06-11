import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import {getTodo, addTodo, deleteTodo, updateTodo} from '../../api/todoApi'

const initialState = {
  loading: false,
  error: null,
  data : []
}

export const fetchTodo = createAsyncThunk('todo/fetchTodo', () =>  getTodo())

// export const addNewTodo = createAsyncThunk('todo/addNewTodo', async (input,thunkApi) =>{
//   try {
//     let res =  await addTodo(input)
//     return res.data
//   } catch (error) {
//     console.log(error)
//     return thunkApi.rejectWithValue(error)
//   }
// })

export const addNewTodo = createAsyncThunk('todo/addNewTodo', async (input) =>{
  const res = await addTodo(input)
  return res.data
})

export const removeTodo = createAsyncThunk('todo/removeTodo', async (del_id) => {
  await deleteTodo(del_id)
  return del_id
})

export const changeTodo = createAsyncThunk('todo/changeTodo', async (input) => {
  await updateTodo(input)
  return input
})

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers : {
    setTodoError : (state, action)=> { 
      console.log(action)
      state.error = {...state.error, message : action.payload}
      // state.error.message  =  action.payload
    }
  },
  extraReducers: builder =>  
  builder.addCase(fetchTodo.pending, (state, action) => {
    state.error = null
    state.loading = true
  })
  .addCase( fetchTodo.fulfilled, (state, action) => {
    state.data = action.payload
    state.loading = false
  })
  .addCase( fetchTodo.rejected, (state, action) => {
    state.error = action.error
    state.loading = false
  })
  .addCase(addNewTodo.fulfilled, (state, action) => {
    console.log(action.payload)
    state.data.unshift(action.payload)
  })
  .addCase(removeTodo.fulfilled, (state, action) => {
    console.log(action.payload)
    let idx = state.data.findIndex(el => el.id === action.payload)
    state.data.splice(idx,1)
  })
  .addCase(changeTodo.fulfilled, (state, action) => {
    console.log(action.payload)
    let idx = state.data.findIndex(el=>el.id === action.payload.id)
    state.data[idx] = action.payload
  })

})

export const { setTodoError } = todoSlice.actions

export default todoSlice.reducer