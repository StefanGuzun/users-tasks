import { getTasks } from "../../Api";
import "../UsersStyle.css";

interface Props{
  task: Tasks
}

interface Tasks{
  title: string;
}


const UsersTasks: React.FC <Props> = ({task}) => {
  return (
      <label className="containerForTasks">
          <input type="checkbox" />
          {task.title}
      </label>
  );
};

export default UsersTasks;
