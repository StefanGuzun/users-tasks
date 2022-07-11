import React,  { useEffect, useState } from "react";
import "../UsersStyle.css";
import UsersTasks from "../UsersTasks/UsersTasks";
import UsersList from "./UsersList";
import { getTasks, getUsers } from "../../Api";

const UserTemplate: React.FC = () => {

  const [users, setUsers] = useState([])
  const [tasks, setTasks] = useState<any>([])

  interface Users{
    name: string;
  }
  interface Tasks{
    title: string;
  }
const variable2 = getUsers()
.then(res => console.log(res.data.filter((x: {id: number; }) => x.id === 1)))
const variable = getTasks()
.then(res => console.log(res.data.filter((x: { userId: number; }) => x.userId === 1)))
if(variable2 === variable){
  console.log("hello world")
}
useEffect(() => {
    getTasks()
    .then(res => setTasks(res.data))
    getUsers()
    .then(res => setUsers(res.data)
)}, [])

  return (
      <div className="container">
        <div className="gradientBorder"/>
        <div className="titleCont">
        <div className="title">
        </div>
          <h1>Onboarding Tracker</h1>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div className="containerUsers">
            <h1 style={{ marginLeft: "33px", fontFamily: "Comic Neue" }}>
              Users
            </h1>
            {users.map((users: Users) => <UsersList users={users}/>)}
          </div>
          <div>
          <h1 style={{ marginLeft: "33px", fontFamily: "Comic Neue" }}>Tasks</h1>
          {tasks.map((tasks: Tasks, id: React.Key | null | undefined) => <UsersTasks key={id = 1} task={tasks}/>)}
          </div>
        </div>
      </div>
  );
};

export default UserTemplate;
