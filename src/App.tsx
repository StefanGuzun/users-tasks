import { useEffect } from 'react'; 
import { getTasks, getUsers } from './Api'; 
import './App.css'; 
import UserTemplate from './Components/UsersTemplate/UsersTemplate'; 
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; 
import UserTemplate1 from './Components/users/User1';
import UserTemplate2 from './Components/users/User2';
import UserTemplate3 from './Components/users/User3';
import UserTemplate4 from './Components/users/User4';
import UserTemplate5 from './Components/users/User5';
import UserTemplate6 from './Components/users/User6';
import UserTemplate7 from './Components/users/User7';
import UserTemplate8 from './Components/users/User8';
import UserTemplate9 from './Components/users/User9';
import UserTemplate10 from './Components/users/User10';

const App = () => { 
 
  useEffect(()=>{ 
    getTasks() 
    getUsers() 
  },[]) 
  return ( 
    <div className="App"> 
        <Routes> 
          <Route path='/' element={<UserTemplate/>}/> 
          <Route path='/user/1' element={<UserTemplate1/>}/> 
          <Route path='/user/2' element={<UserTemplate2/>}/> 
          <Route path='/user/3' element={<UserTemplate3/>}/> 
          <Route path='/user/4' element={<UserTemplate4/>}/> 
          <Route path='/user/5' element={<UserTemplate5/>}/> 
          <Route path='/user/6' element={<UserTemplate6/>}/> 
          <Route path='/user/7' element={<UserTemplate7/>}/> 
          <Route path='/user/8' element={<UserTemplate8/>}/> 
          <Route path='/user/9' element={<UserTemplate9/>}/> 
          <Route path='/user/10' element={<UserTemplate10/>}/> 
        </Routes> 
    </div> 
  ); 
} 
 
export default App;