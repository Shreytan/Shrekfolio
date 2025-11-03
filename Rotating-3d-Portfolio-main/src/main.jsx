import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './components/Home.jsx'
import { BrowserRouter as Browser, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx';
import Projects from './components/Projects.jsx'
import Achievements from './components/Achivements.jsx';
import Experience from './components/Experience.jsx'
import Wavy from './components/WavyLines/WavyLines.jsx'


createRoot(document.getElementById('root')).render(
  <div className='title'>
    <Browser>
    <Navbar/>
      <Routes>
        
        <Route path='/' element={<Home/>}></Route>
        <Route path='/achievements' element={<Achievements/>}> </Route>
        <Route path='/projects' element={<Projects/>}> </Route>
        {/* <Route path='/projects' element={<DigitalRain/>}> </Route> */}
        <Route path='/exp' element={<Experience/>}> </Route>
       <Route path = '/w' element={<Wavy/>}> </Route>

      </Routes>
    </Browser>
  </div>
)
