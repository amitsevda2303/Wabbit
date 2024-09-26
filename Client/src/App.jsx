import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className=' h-auto w-lvw box-border m-0 p-0 pt-[80px]'>
      <Navbar/>
   </div>
  )
}

export default App
