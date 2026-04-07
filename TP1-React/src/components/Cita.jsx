import React from 'react'

export default function Cita({cita}) {
    const {nombre, dueño, fecha, hora, sintomas} = cita;
  return (
    
      <div className="cita">
        <p>Mascota: <span>{nombre}</span></p>
        <p>Dueño: <span>{dueño}</span></p>
        <p>Fecha: <span>{fecha}</span></p>
        <p>Hora: <span>{hora}</span></p>
        <p>Sintomas: <span>{sintomas}</span></p>
        <button className="button eliminar u-full-width">Eliminar ×</button>
      </div>      
  )
}
