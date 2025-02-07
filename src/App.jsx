import  React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Services from './components/services/Services';
import Qualification from './components/qualification/Qualification';
import Project from './components/project/Project';
import ProjectDetail from './components/project/ProjectDetail';

function App() {
  return (
    <>
    <Header />
    
    <main className='main'>
      <Home />
      <About />
      <Skills />
      <Services />
      <Qualification /> 
      <Router>
        <Routes>
          <Route path="/" element={<Project />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
    </Router>     
    </main>
    
    </>
  )
}

export default App
