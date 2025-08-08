import { useState } from 'react'
import reactLogo from '/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import NavBar from './sections/NavBar'
import Hero from './sections/Hero'
import Evaluation from './sections/Evaluation'

function App() {

  return (
    <>
      <NavBar />
      <Hero />
      <Evaluation />
    </>
  )
}

export default App
