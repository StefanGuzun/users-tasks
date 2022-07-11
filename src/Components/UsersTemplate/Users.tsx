import React,  { useEffect, useState } from "react";
import "../UsersStyle.css";
import UsersTasks from "../UsersTasks/UsersTasks";
import { getTasks, getUsers } from "../../Api";
import { Link } from "react-router-dom";


interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

interface UserListProps {
  userList: User[]
}

const Users = ({ userList }: UserListProps) => {
  let [currentUserId, setCurrentUserId] = useState(1)

  const onUserSelect = (id: number) =>  {
      setCurrentUserId(id)
  }

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
        {userList.map((user) => 
        <div>
          <ul>
            <div className="users">
              <li style={{ marginLeft: "8px" }}>{user.name}</li>
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

export default Users;
