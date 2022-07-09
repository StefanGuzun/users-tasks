import React,  { useEffect, useState } from "react";
import "../UsersStyle.css";
import UsersTasks from "../UsersTasks/UsersTasks";
import { getTasks, getUsers } from "../../Api";
import { Link } from "react-router-dom";



const UserTemplate: React.FC = () => {
  const [users, setUsers] = useState([])
  const [tasks, setTasks] = useState<any>([])
  const [curentId,setCurentId] = useState(1)

  interface Users{
    name: string;
  }
  interface Tasks{
    title: string;
  }
const auf = (id: number) =>{
   setCurentId(id)
}

useEffect(() => {
    getTasks()
    .then(res => setTasks(res.data))
    getUsers()
    .then(res => setUsers(res.data))
}, [])


return (
  <div className="container">
    <div className="gradientBorder" />
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
        {users.map((users: Users) => <div>
          <ul>
            <div className="users">
              <li style={{ marginLeft: "8px" }}>{users.name}</li>
            </div>
          </ul>
        </div>)}
      </div>
      <div>
        <h1 style={{ marginLeft: "33px", fontFamily: "Comic Neue" }}>Tasks</h1>
        {tasks.map((tasks: Tasks) => <UsersTasks task={tasks} />)}
      </div>
    </div>
  </div>
);
};

export default UserTemplate;
