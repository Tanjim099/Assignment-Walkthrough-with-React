import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Person from './component/Person'

function App() {
  return (
    <>
      <Person name="Tanjim" age="20" />
      <Person name="Riya" age="16" />
    </>
  )
}

export default App
