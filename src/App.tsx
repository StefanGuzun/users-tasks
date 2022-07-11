import { useEffect, useState } from 'react'; 
import { getUsers } from './Api'; 
import './App.css'; 
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; 
import Users from './Components/UsersTemplate/Users';
import UsersTasks from "../src/Components/UsersTasks/UsersTasks"

 
interface UsersProps {
  id: number;
  name: string;
  username: string;
  email: string;
}

const App = () => { 
 
  const [users, setUsers] = useState<UsersProps[]>([]);

  useEffect(() => {
      getUsers()
          .then(response => setUsers(response.data))
  }, [])
return (
    <>
        <div className="App">
            <Routes>
                <Route path='/' element={<Users userList={users} />} />
                <Route path='users' element={<Users userList={users} />}/>
                <Route path='users/:id/*' element={<Users userList={users} />} />
            </Routes>
            <UsersTasks/>
        </div>
    </>
)
}
  
 
export default App;