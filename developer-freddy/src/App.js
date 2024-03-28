import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Imported Pages comprised of multiple components
import NavBar from './components/NavBar.jsx';



function App() {
  return (
    <>
    <Router>
      <NavBar/>
      <Routes>
        <Route path='/' exact Component={Home}/>
        <Route path='/aboutMe' exact Component={About}/>
        <Route path='/projects' exact Component={Projects}/>
      </Routes>
    </Router>

    </>
  );
}

export default App;
