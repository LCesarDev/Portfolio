import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css'
import Home from './Home.jsx';
import Projects from './Projects.jsx';
import Header from'./Header.jsx'

function App() {

  return (

   <Router>

    <Header/>
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='Projects' element={<Projects />} />
    </Routes>
    
    <div className="app"></div>

   </Router>

  )
}

export default App
