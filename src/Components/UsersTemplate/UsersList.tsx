import { idText } from "typescript";
import "../UsersStyle.css";

interface Props{
  users: Users,
  index: Users
}

interface Users{
  name: string;
  id: number
}

const UsersList: React.FC <Props> = ({users}) => {
  return (
    <div>
    <ul>
      <div className="users">
        <li style={{ marginLeft: "8px" }} id={index.id}>{users.name}</li>
      </div>
    </ul>
    </div>
  );
};


export default UsersList;
