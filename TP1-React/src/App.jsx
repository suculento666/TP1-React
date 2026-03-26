import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)


      return (
        <>
          <form action="ingresar Datos">
            <div>
              <label htmlFor="Nombre">Nombre:</label>
              <input type="text" id="Nombre" name="Nombre" />
            </div>
            <div>
              <label htmlFor="Apellido">Apellido:</label>
              <input type="text" id="Apellido" name="Apellido" />
            </div>
            <div>
              <label htmlFor="Edad">Edad:</label>
              <input type="number" id="Edad" name="Edad" min="0" />
            </div>
            <div>
              <label htmlFor="Peso">Peso (kg):</label>
              <input type="number" id="Peso" name="Peso" min="0" step="0.1" />
            </div>
            <div>
              <label htmlFor="Altura">Altura (cm):</label>
              <input type="number" id="Altura" name="Altura" min="0" step="0.1" />
            </div>
          <div>
            <label htmlFor="sintomas">Sintomas</label>
            <textarea id="sintomas" name="sintomas" className="u-full-width"></textarea>
          </div>
          
          <button type="submit">Enviar</button> 
            <button type="submit">Enviar</button>
          </form>
        </>
      )
    }

export default App
