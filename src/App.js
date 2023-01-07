import './App.css';
// import { NavLink, Link, HashRouter, Routes, Route, BrowserRouter, Navigate} from "react-router-dom";

import LandingScreen from './components/landing/LandingScreen'
import AboutScreen from './components/about/AboutScreen'
import SkillScreen from './components/skills/SkillScreen'
import ProjectScreen from './components/projects/ProjectScreen'
import ExperienceScreen from './components/experiences/ExperienceScreen'

function App() {
  return (
    <div className="App h-full bg-black text-white font-poppins">

      <div className='snap-y snap-mandatory h-screen w-screen overflow-y-scroll'>
        <LandingScreen/>
        <AboutScreen/>
        <SkillScreen/>
        <ExperienceScreen/>
        <ProjectScreen/>
      </div>

    </div>
  );
}

export default App;
