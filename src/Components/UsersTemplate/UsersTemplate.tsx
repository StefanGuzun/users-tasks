import React,  { useEffect, useState } from "react";
import "../UsersStyle.css";
import UsersTasks from "../UsersTasks/UsersTasks";
import UsersList from "./UsersList";

const UserTemplate: React.FC = () => {

  const [users, setUsers] = useState([])

  interface Users{
    name: string;
  }

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(res => setUsers(res))
    .catch(err => console.log(err))
  }, [])

  return (
      <div className="container">
        <div className="title">
          <h1>Onboarding Tracker</h1>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div className="containerUsers">
            <h1 style={{ marginLeft: "33px", fontFamily: "Comic Neue" }}>
              Users
            </h1>
            {users.map((users: Users) => <UsersList users={users}/>)}
          </div>
          <UsersTasks />
        </div>
      </div>
  );
};

export default UserTemplate;
