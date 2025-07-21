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

      <section id="home" >
      <Home/>
      </section>


      <section id="sobre">
        <Sobre />
      </section>

      <section id="projects">
        <Projects />
      </section>

    </div>
    
  );
}

export default App
