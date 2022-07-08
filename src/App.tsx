import React, { useEffect, useState } from 'react';
import './App.css';
import UserTemplate from './Components/UsersTemplate/UsersTemplate';
import { BrowserRouter, Routes, Route, Link, Router } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <UserTemplate/>
    </div>
  );
}

export default App;