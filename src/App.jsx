import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='cinza'>
        <h1 className='hi'>Login</h1>
        <input type="Usuario"/>
        <input type="Senha" />
        <p>Usuario</p>
        <p>Senha  </p>
      </div>
    </>
  )
}

export default App
