import { useState } from 'react'
import Header from './components/Header'
import Listado from './components/Listado'
import Formulario from './components/formulario'

function App() {
  const [citas, setCitas] = useState([
    { id: 1, mascota: 'Max', propietario: 'Juan Pérez', fecha: '2024-01-15', hora: '10:00', sintomas: 'Tos' },
    { id: 2, mascota: 'Luna', propietario: 'María López', fecha: '2024-01-16', hora: '14:30', sintomas: 'Vómitos' },
    { id: 3, mascota: 'Bella', propietario: 'Carlos Ruiz', fecha: '2024-01-17', hora: '09:15', sintomas: 'Fiebre' }
  ])

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
