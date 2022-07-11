import { getTasks } from "../../Api";
import "../UsersStyle.css";
import { useState, useEffect } from "react";
import "./UsersTasks.css"

interface data {
  id: number;
}

interface Tasks {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const UsersTasks = ({id}: data) => {

  const [tasks, setTask] = useState <Tasks[]> ([])
  const [selectTasks, setSelectTasks] = useState<Tasks[]>([])
  useEffect(() => {
    getTasks()
    .then((res) => setTask(res.data))
  }, [])

  useEffect(() => {
  const userTasks = tasks.filter((task: { userId: number; }) => task.userId === id)
  setSelectTasks(userTasks)
  }, [tasks, id])

  return (
    <div className="containerForTasks">
    <h1 style={{ marginLeft: "33px", fontFamily: "Comic Neu" }}>Tasks</h1>
    {selectTasks.map(task => {
      return(
      <div key={task.id}>
      <label>
          <input type="checkbox" />
          {task.title}
      </label>
      </div> )
    })
  }
  </div>
  );
};

export default UsersTasks;
