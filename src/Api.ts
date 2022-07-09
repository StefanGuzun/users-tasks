import axios from "axios"
import { useEffect, useState } from "react"

const users = "https://jsonplaceholder.typicode.com/users"
const tasks = "https://jsonplaceholder.typicode.com/todos"


 export const getUsers = async () =>{
    return await axios(users)
    }


export const getTasks = async () =>{
    return await axios(tasks)
}