import { useEffect } from 'react'; 
import { getTasks, getUsers } from './Api'; 
import './App.css'; 
import UserTemplate from './Components/UsersTemplate/UsersTemplate'; 
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; 

 
const App = () => { 
 
  useEffect(()=>{ 
    getTasks() 
    getUsers() 
  },[]) 
 
  return ( 
    <div className="App"> 
        <Routes> 
          <Route path='/user/1' element={<UserTemplate/>}/> 
        </Routes> 
    </div> 
  ); 
} 
 
export default App;