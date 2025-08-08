import { useState } from 'react'
import reactLogo from '/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Title from '@components/Title.jsx'

function App() {

  return (
    <>
      <Title name="Main Title" level={1} />
      <Title name="Sub-Title" level={2} />
      <Title name="Wrong Title" level={"abc"} />
      <Title name="YOU'RE LONG" level={10} />
    </>
  )
}

export default App
