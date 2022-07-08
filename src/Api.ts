import axios from "axios"
import { useEffect, useState } from "react"

const users = "https://jsonplaceholder.typicode.com/users"
const tasks = "https://jsonplaceholder.typicode.com/todos"


 export const getUsers = async () =>{
    await axios(users)
    .then(result => result
    )}


export const getTasks = async () =>{
    await axios(tasks)
    .then(result => console.log(result)
    )
}
