import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './components/Header'
import Form from './components/Form'
import Listado from './components/Listado'
function App() {
  const [count, setCount] = useState(0)


  return (
    <>
      <Header />
      <main className="app-container">
        <section className="app-grid">
          <div className="left">
            <Form />
          </div>
          <div className="right">
            <Listado />
          </div>
        </section>
      </main>
    </>
  )
}

export default App
