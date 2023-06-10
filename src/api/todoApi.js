import axios from 'axios'

const todoApi = axios.create({
    baseURL : 'http://localhost:8000'
})

export const getTodo = async () => {
    const res = await todoApi.get('/todo?_sort=id&_order=desc')
    // return Promise.reject('An Error..')
    return res.data 
}

export const addTodo = async (todo) => {
    return await todoApi.post('/todo', todo)
}

export const updateTodo = async (todo) => {
    return await todoApi.patch(`/todo/${todo.id}`, todo)
}

export const deleteTodo = async (id) => {
    return await todoApi.delete(`/todo/${id}`, id)
}

export default todoApi
