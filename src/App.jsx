import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Router from './routes/Router'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className='overflow-x-hidden'>
      <Router/>
    </div>
  )
}

export default App
