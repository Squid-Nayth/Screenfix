import { useState } from 'react'
import './App.css'

import NavBar from './sections/NavBar'
import Hero from './sections/Hero'
import Evaluation from './sections/Evaluation'
import Course from './sections/Course'
import About from './sections/About'
import Satisfaction from './sections/Satisfaction'
import MapLocation from './sections/MapLocation'

function App() {

  return (
    <>
      <NavBar />
      <Hero />
      <Evaluation />
      <Course />
      <About />
      <Satisfaction />
      <MapLocation />
    </>
  )
}

export default App
