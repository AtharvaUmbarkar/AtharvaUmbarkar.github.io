import './App.css';
import { NavLink, Link, HashRouter, Routes, Route, BrowserRouter, Navigate} from "react-router-dom";

import About from './components/inner-content/about/About';
import Socials from './components/inner-content/about/Socials'
import Contact from './components/inner-content/about/Contact'

import Project1 from './components/inner-content/projects/Project1'
import Project2 from './components/inner-content/projects/Project2'
import Project3 from './components/inner-content/projects/Project3'
import Project4 from './components/inner-content/projects/Project4'

import Frontend from './components/inner-content/skills/Frontend'
import Backend from './components/inner-content/skills/Backend'
import OtherSkills from './components/inner-content/skills/OtherSkills'

import Experience1 from './components/inner-content/experiences/Experience1'
import Experience2 from './components/inner-content/experiences/Experience2'

import Overlay from './components/Overlay';

function App() {
  return (
    <div className="App h-full bg-black -z-20">
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Overlay/>}>

            <Route path="/about">
              <Route exact path='' element={<About/>}></Route>
              <Route path='socials' element={<Socials/>}></Route>
              <Route path='contact' element={<Contact/>}></Route>
              <Route path='*' element={<div className='text-white'>404 NOT FOUND</div>}/>
            </Route>

            <Route path="/projects">
              <Route path='' element={<Navigate replace to={'1'}/>}></Route>
              <Route path='1' element={<Project1/>}></Route>
              <Route path='2' element={<Project2/>}></Route>
              <Route path='3' element={<Project3/>}></Route>
              <Route path='4' element={<Project4/>}></Route>
              <Route path='*' element={<div className='text-white'>404 NOT FOUND</div>}/>
            </Route>

            <Route path="/skills">
              <Route path='' element={<Navigate replace to={'frontend'}/>}></Route>
              <Route path='frontend' element={<Frontend/>}></Route>
              <Route path='backend' element={<Backend/>}></Route>
              <Route path='other' element={<OtherSkills/>}></Route>
              <Route path='*' element={<div className='text-white'>404 NOT FOUND</div>}/>
            </Route>

            <Route path="/experiences">
              <Route path='' element={<Navigate replace to={'1'}/>}></Route>
              <Route path='1' element={<Experience1/>}></Route>
              <Route path='2' element={<Experience2/>}></Route>
              <Route path='*' element={<div className='text-white'>404 NOT FOUND</div>}/>
            </Route>

            <Route path='*' element={<div className='text-white'>404 NOT FOUND</div>}/>
          </Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
