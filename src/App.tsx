import React from 'react';
import {Home} from "./pages/main" ;
import { Login } from './pages/login';
import {BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import './App.css';
import { Navbar } from './components/navbar';

function App() {
  return (
    <div className="App">
     <h1>Social Media App  </h1> 
      <Router>
        <Navbar/>
        <Routes>
          <Route path = '/' element = {<Home/>}/>
          <Route path = '/login' element = {<Login/>}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
