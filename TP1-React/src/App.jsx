import { useEffect } from 'react'
import { useState } from 'react'
import Header from './components/Header'
import Listado from './components/Listado'
import Formulario from './components/Formulario' 


function App() {
  const [citas, setCitas] = useState([]) 

  const agregarCita = (nuevaCita) => {
    setCitas((prev) => [...prev, nuevaCita]) // Agrega la nueva cita al estado de citas, manteniendo las existentes (Prev = mantiene las citas anteriores)
  }

  useEffect(()=>{const s=JSON.parse(localStorage.getItem('citas'))||[]; if(s.length) setCitas(s)},[]); // Se ejecuta una vez al montar el componente para cargar las citas desde localStorage, si existen. Si no hay citas, se inicializa con un array vacío.
useEffect(()=>localStorage.setItem('citas',JSON.stringify(citas)),[citas]); // Se ejecuta cada vez que cambian las citas para guardar el estado actualizado en localStorage

  return (
    <>
      <Header />
      <div className='container'>
        <div className = "row">
          <div 
          className='one-half column'> <Formulario agregarCita={agregarCita} />
          </div> 

          <div 
          className='one-half column'> <Listado citas={citas} setCitas={setCitas} /></div>
        </div>
      </div>
    </>
  )
}

export default App
