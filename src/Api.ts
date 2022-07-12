import axios from "axios"

const users = "https://jsonplaceholder.typicode.com/users"
const tasks = "https://jsonplaceholder.typicode.com/todos"

export const getUsers = async () => {
    return axios(users);
}


export const getTasks = async () => {
    return axios(tasks);
}
