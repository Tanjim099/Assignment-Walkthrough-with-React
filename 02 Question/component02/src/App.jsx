import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './component/Button'

function App() {

  return (
    <>
      <Button text="Clicked me" onClick={() => console.log("Button Clicked")} />
    </>
  )
}

export default App
