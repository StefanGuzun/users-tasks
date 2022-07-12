import { getTasks } from "../../Api";
import "../UsersStyle.css";
import { useState, useEffect } from "react";

interface data {
  id: number;
}

interface Tasks {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const UsersTasks = ({ id }: data) => {
  const [tasks, setTask] = useState<Tasks[]>([]);
  const [selectTasks, setSelectTasks] = useState<Tasks[]>([]);

  const handleCheckBoxPosition = (id: string) => {
    const temporaryTasks = [...tasks];
    const tasksToChange = tasks.filter((todo) => todo.id.toString() === id);
    const index = tasks.findIndex((todo) => todo.id === tasksToChange[0].id);
    
    tasksToChange[0].completed = !tasksToChange[0].completed;
    temporaryTasks[index] = tasksToChange[0];
    setTask(temporaryTasks);
  };
  useEffect(() => {
    getTasks().then((res) => setTask(res.data));
  }, []);

  useEffect(() => {
    const userTasks = tasks.filter(
      (task: { userId: number }) => task.userId === id
    );
    setSelectTasks(userTasks);
  }, [tasks, id]);

  return (
    <div className="containerForTasks">
      {selectTasks.map((task) => {
        return (
          <div key={task.id}>
            <label className="containerForTasks">
              <input
                type="checkbox" id={task.id.toString()}
                value={task.id} onChange={() => handleCheckBoxPosition(task.id.toString())}
                defaultChecked={task.completed} disabled={task.completed}
              />
              {task.title}
            </label>
          </div>
        );
      })}
    </div>
  );
};

export default UsersTasks;
