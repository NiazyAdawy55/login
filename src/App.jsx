import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import LoginForm from './components/LoginForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex min-h-screen flex-col items-center justify-between gap-5 bg-no-repeat p-4  md:p-12' >
        <Navbar/>
        <LoginForm/>
    </div>
  )
}

export default App
