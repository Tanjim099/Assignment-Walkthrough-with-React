import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import List from './component/List'

function App() {

  return (
    <>
      <List items={['apple', 'banana', 'mango', 'orange']} />
    </>
  )
}

export default App
