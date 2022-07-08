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
      <div className="containerForTasks">
        <label>
          <input type="checkbox" />
          {task.title}
        </label>
      </div>
  );
};

export default UsersTasks;
