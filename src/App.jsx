import { useState } from 'react'
import './App.css'

import NavBar from './sections/NavBar'
import Hero from './sections/Hero'
import Evaluation from './sections/Evaluation'
import Course from './sections/Course'

function App() {

  return (
    <>
      <NavBar />
      <Hero />
      <Evaluation />
      <Course />
    </>
  )
}

export default App
