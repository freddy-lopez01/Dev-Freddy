import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Imported Pages comprised of multiple components
import NavBar from './components/NavBar.jsx';
import Home from './components/Home.jsx';
import Projects from './components/Projects.jsx';
import Socials from './components/Socials.jsx';



function App() {
  return (
    <>
    <Router>
      <NavBar/>
      <Routes>
        <Route path='/' exact Component={Home}/>
        <Route path='/projects' exact Component={Projects}/>
        <Route path='/socials' exact Component={Socials}/>
      </Routes>
    </Router>

    </>
  );
}

export default App;
