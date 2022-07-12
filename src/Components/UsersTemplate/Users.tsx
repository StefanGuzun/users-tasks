import { useState } from "react";
import "../UsersStyle.css";
import { Link } from "react-router-dom";
import UsersTasks from "../UsersTasks/UsersTasks";

interface Props {
  userList: User[];
}

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

const Users = ({ userList }: Props) => {
  let [currentId, setCurrentUserId] = useState(1);

  const onUserSelect = (id: number) => {
    setCurrentUserId(id);
  };

  return (
    <div className="container">
      <div className="gradientBorder" />
      <div className="titleCont">
        <h1>Onboard Tracker</h1>
      </div>
      <div className="lists" style={{display: "flex", justifyContent: "space-around"}}>
        <div id="user-list" style={{display: "flex", flexDirection: "column"}}>
          <h2 style={{ marginLeft: "33px", fontFamily: "Comic Neu" }}>Users</h2>
          {userList.map((user) => {
            return (
              <div key={user.id}>
                <ul style={{ listStyle: "none" }}>
                  <li>
                    <form
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
                    </form>
                  </li>
                </ul>
              </div>
            );
          })}
        </div>
        <UsersTasks id={currentId} />
      </div>
    </div>
  );
};

export default Users;
