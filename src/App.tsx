import { useEffect, useState } from 'react';
import { getTasks, getUsers } from './Api';
import './App.css';
import { Route, Routes } from "react-router-dom";
import Users from './Components/UsersTemplate/Users';
import UsersTasks from "../src/Components/UsersTasks/UsersTasks"


interface UsersProps {
  id: number;
  name: string;
  username: string;
  email: string;
}

interface TaskProps {
    userId: number;
    id: number;
    title: string;
}

const App = () => {

  const [users, setUsers] = useState<UsersProps[]>([]);
  const [tasks, setTask] = useState<TaskProps[]>([]);

  useEffect(() => {
      getUsers()
          .then(response => setUsers(response.data))
      getTasks()
          .then(response => setTask(response.data.data))
  }, [])
return (
    <>
        <div className="App">
            <Routes>
                <Route path='/' element={<Users userList={users} />} />
                <Route path='users' element={<Users userList={users} />}/>
                <Route path='users/:id/*' element={<Users userList={users} />} />
            </Routes>
        </div>
    </>
)
}


export default App;
