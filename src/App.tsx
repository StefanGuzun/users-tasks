import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Router,Routes, Route, Link} from "react-router-dom";


function App() {

  const testApi = ['john', 'anne', 'iulian']
  const testApiPath = testApi.map((name) => <h1>{name}</h1>)
  console.log(testApi);
  
  return (
    <Router location={''} navigator={undefined}>
    <div className="App">
      <h1>hello world</h1>
      <Routes>
        {testApiPath}
      </Routes>
    </div>
    </Router>
  );
}

export default App;
