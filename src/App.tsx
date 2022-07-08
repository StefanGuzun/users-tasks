import { useEffect } from 'react';
import { getTasks, getUsers } from './Api';
import './App.css';
import UserTemplate from './Components/UsersTemplate/UsersTemplate';


const App = () => {
useEffect(()=>{
getTasks()
getUsers()
},[])
  return (
    <div className="App">
       <UserTemplate/>
    </div>
  );
}

export default App;
