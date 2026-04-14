import Cita from './Cita'

export default function Listado({ citas = [], setCitas }) {
  return (
    <div>
      <h2>Administra tus citas</h2>
      {citas.length === 0 ? (
        <p>No hay citas</p>
      ) : (
        citas.map((cita) => (
          <Cita
            key={cita.id}
            cita={cita}
            setCitas={setCitas}
          />
        ))
      )}
    </div>
  )
}