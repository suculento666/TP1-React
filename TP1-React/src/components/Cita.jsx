export default function Cita({ cita, setCitas }) {
  const eliminarCita = () => {
    setCitas((citasActuales) =>
      citasActuales.filter((citaActual) => citaActual.id !== cita.id)
    )
  }

  return (
    <div className="cita">
      <p>Mascota: {cita.mascota}</p>
      <p>Dueño: {cita.propietario}</p>
      <p>Fecha: <span>{cita.fecha}</span></p>
      <p>Hora: <span>{cita.hora}</span></p>
      <p>Síntomas: <span>{cita.sintomas}</span></p>
      <button
        className="button eliminar u-full-width"
        onClick={eliminarCita}
      >
        Eliminar X
      </button>
    </div>
  )
}