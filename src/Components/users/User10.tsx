import "../UsersStyle.css";
import UsersTasks from "../UsersTasks/UsersTasks";
import { getTasks, getUsers } from "../../Api";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

const UserTemplate10: React.FC = () => {
  const [users, setUsers] = useState([])
  const [tasks, setTasks] = useState<any>([])

  interface Users {
    name: string;
  }
  interface Tasks {
    title: string;
  }
const userId = (e: any) =>{
   return e.id
}

useEffect(() => {
    getTasks()
    .then(res => setTasks(res.data.filter((items: { userId: number; }) => items.userId === 10)))
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
              <li style={{ marginLeft: "8px" }}><Link to={`/user/${userId(users)}`}style={{color: "black", textDecoration: "none"}}>{users.name}</Link></li>
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

export default UserTemplate10;
