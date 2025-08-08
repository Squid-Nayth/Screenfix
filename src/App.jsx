import { useState } from 'react'
import reactLogo from '/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Button from '@components/Button.jsx'

function App() {

  const handleClick = () => {
    alert('You clicked the button !');
  };

  return (
    <>
      <Button
        name="Clicking test"
        containerClass="bg-blue-500 text-white px-4 py-2 rounded"
        onClickFunc={handleClick}
      />
    </>
  )
}

export default App
