import './App.css';

import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
// import { useState } from 'react';

import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Projects from './components/Projects/Projects'
import Socials from './components/Socials/Socials'
import Skills from './components/Skills/Skills';

function App() {
  return (
    <div className='app flex flex-col'>
      <HashRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Navigate replace to="/home" />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/socials" element={<Socials />} />
          <Route exact path="/skills" element={<Skills />} />
          {/* <Route exact path="/about" element={<About />} /> */}
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
