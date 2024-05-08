import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import Profiles from './pages/Profiles'
import Settings from './pages/Settings'
import Header from '../../demo1/src/Header'


function App() {
 
  return (

       
   <BrowserRouter>
   <Header/>
   <Routes>
    <Route path='/about' element={<About/>}/>
    <Route path='/' element={<Home/>}/>
    <Route path='/profile' element={<Profiles/>}/>
    <Route path='/settings' element={<Settings/>}/>

   </Routes>
  
   </BrowserRouter>

  )
}

export default App
