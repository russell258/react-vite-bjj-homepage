import { useState } from 'react'
import bjj from './assets/bjj.png'
import robin6 from '/robin6.jpg'
import Navbar from './components/Navbar'
import Main from './components/Main'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar bjjLogo={bjj} />
      <div>
        <a href="https://www.instagram.com/fieldassembly/?hl=en" target="_blank">
          <img src={bjj} className="logo" alt="Field Assembly" />
        </a>
        <a href="https://www.fieldassembly.co/schedule" target="_blank">
          <img src={robin6} className="logo react" alt="React logo" />
        </a>
      </div>
      <Main />
      <h1 className="oss">OSS</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Tapped: {count}
        </button>
      </div>
    </>
  )
}

export default App
