import React, { useState } from "react";
import "../UsersStyle.css";
import { Link } from "react-router-dom";
import UsersTasks from "../UsersTasks/UsersTasks";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

interface Props {
  userList: User[];
}

const Users = ({ userList }: Props) => {
  let [currentId, setCurrentUserId] = useState(1);

  const onUserSelect = (id: number) => {
    setCurrentUserId(id);
  };

  return (
    <div className="container">
      <div>
      <h2 style={{ marginLeft: "33px", fontFamily: "Comic Neu" }}>Users</h2>
      {userList.map((user) => {
        return (
          <div key={user.id}>
            <ul style={{ listStyle: "none" }}>
              <li>
                <div
                  className="users"
                  id={user.id.toString()}
                  onClick={() => onUserSelect(user.id)}
                >
                  <Link
                    style={{ color: "black", textDecoration: "none" }}
                    to={`/users/${user.id}`}
                    onClick={() => onUserSelect(user.id)}
                  >
                    {user.name}
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        );
      })}
      </div>
        <UsersTasks id={currentId} />
    </div>
  );
};

export default Users;
