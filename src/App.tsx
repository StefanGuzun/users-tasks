import { useEffect } from 'react';
import { getTasks, getUsers } from './Api';
import './App.css';
import UserTemplate from './Components/UsersTemplate/UsersTemplate';
import { BrowserRouter, Routes, Route, Link, Router } from "react-router-dom";


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