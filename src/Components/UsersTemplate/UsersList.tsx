import "../UsersStyle.css";

interface Props{
  users: Users
}

interface Users{
  name: string;
}

const UsersList: React.FC <Props> = ({users}) => {
  return (
    <div>
    <ul>
      <div className="users">
        <li style={{ marginLeft: "8px" }}>{users.name}</li>
      </div>
    </ul>
    </div>
  );
};

export default UsersList;
