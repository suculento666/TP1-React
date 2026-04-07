import { useState } from 'react'
import Header from './components/Header'
import Form from './components/Form'
import Listado from './components/Listado'
function App() {
  const [citas] = useState([
    { id: 1, nombre: 'Max', dueño: 'Juan Pérez', fecha: '2024-01-15', hora: '10:00', sintomas: 'Tos' },
    { id: 2, nombre: 'Luna', dueño: 'María López', fecha: '2024-01-16', hora: '14:30', sintomas: 'Vómitos' },
    { id: 3, nombre: 'Bella', dueño: 'Carlos Ruiz', fecha: '2024-01-17', hora: '09:15', sintomas: 'Fiebre' }
  ])

 return (
    <>
      <Header />
      <div className='container'>
        <div className = "row">
          <div className='one-half column'> <Form /></div>
          <div className='one-half column'> <Listado citas={citas} /></div>
        </div>
        
      </div>
      
      
    </>
  )
}

export default App
