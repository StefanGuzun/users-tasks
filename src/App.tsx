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
          <Route path='/' element={<UserTemplate/>}/> 
          <Route path='/user/1' element={<UserTemplate/>}/> 
          <Route path='/user/2' element={<UserTemplate/>}/> 
          <Route path='/user/3' element={<UserTemplate/>}/> 
          <Route path='/user/4' element={<UserTemplate/>}/> 
          <Route path='/user/5' element={<UserTemplate/>}/> 
          <Route path='/user/6' element={<UserTemplate/>}/> 
          <Route path='/user/7' element={<UserTemplate/>}/> 
          <Route path='/user/8' element={<UserTemplate/>}/> 
          <Route path='/user/9' element={<UserTemplate/>}/> 
          <Route path='/user/10' element={<UserTemplate/>}/> 
        </Routes> 
  
    </div> 
  ); 
} 
 
export default App;