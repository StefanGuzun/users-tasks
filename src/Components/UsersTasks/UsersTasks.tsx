import { getTasks } from "../../Api";
import "../UsersStyle.css";
import { useState, useEffect } from "react";

// interface Props{
//   task: Tasks
// }

interface Tasks{
  title: string;
}

const UsersTasks: React.FC = () => {

  // const [tasks, setTask] = useState <any> ([])

  useEffect(() => {
    getTasks().then((item) => console.log(item.data.filter((task: { id: number; userId: number;}) => 
        task.userId === 1 )))
  }, [])

  return (
      <div className="containerForTasks">
        <label>
          <input type="checkbox" />
        </label>
      </div>
  );
};

export default UsersTasks;
