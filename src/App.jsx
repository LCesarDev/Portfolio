import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css'
import Home from './Home.jsx';
import Projects from './Projects.jsx';
import Header from'./Header.jsx'
import Sobre from'./Sobre.jsx'

function App() {

  return (

  
    <div className="app">
      <Header/>
      <Home/>
      <Sobre/>
    </div>
   

  )
}

export default App
