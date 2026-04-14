import { useState } from 'react'
import Header from './components/Header'
import Listado from './components/Listado'
import Formulario from './components/Formulario'


function App() {
  const [citas, setCitas] = useState([])

  const agregarCita = (nuevaCita) => {
    setCitas((prev) => [...prev, nuevaCita])
  }

  return (
    <>
      <Header />
      <div className='container'>
        <div className = "row">
          <div className='one-half column'> <Formulario agregarCita={agregarCita} /></div>
          <div className='one-half column'> <Listado citas={citas} setCitas={setCitas} /></div>
        </div>
      </div>
    </>
  )
}

export default App
