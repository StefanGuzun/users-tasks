import React, { useEffect, useState } from "react";
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
  userList: User[];
}

const Users = ({ userList }: UserListProps) => {
  let [currentUserId, setCurrentUserId] = useState(1);

  const onUserSelect = (id: number) => {
    setCurrentUserId(id);
  };

  return (
    <div className='container'>
    <div>
        <h2 style={{display:"flex", justifyContent:"center"}}>Users</h2>
        {userList.map(user => {
            return (
                <div key={user.id}>
                    <ul>
                        <li>
                            <div className="users"
                                id={user.id.toString()}
                                onClick={() => onUserSelect(user.id)}>
                                <Link
                                    to={`/users/${user.id}`}
                                    onClick={() => onUserSelect(user.id)} >{user.name}
                                </Link>
                            </div>
                        </li>
                    </ul>
                </div>
            )
        })}
    </div>
    <div className='containerForTasks'>
    </div>
</div>
);
};

export default Users;
