import axios from 'axios'

const todoApi = axios.create({
    baseURL : 'http://localhost:8000'
})

export const getTodo = async () => {
    const res = await todoApi.get('/todo')
    return res.data
}

export const getTodoPage = async (page) => {
    const res = await todoApi.get(`/todo?_page=${page}`)
    return res.data
}

export const addTodo = async (todo) => {
    return await todoApi.post('/todo', todo)
}

export const updateTodo = async (todo) => {
    return await todoApi.patch(`/todo/${todo.id}`, todo)
}

export const deleteTodo = async ({id}) => {
    return await todoApi.delete(`/todo/${id}`, id)
}

export default todoApi
