import { useState } from "react";

function Formulario({agregarCita}) {
    const [mascota, setMascota] = useState("");
    const [dueño, setdueño] = useState("");
    const [fecha, setFecha] = useState("");
    const [hora, setHora] = useState("");
    const [sintomas, setSintomas] = useState("");    

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!mascota || !dueño || !fecha || !hora || !sintomas) {
            alert("Por favor, rellena todos los campos.");
            return;
        }

        const nuevaCita = {
            id: Date.now(),
            mascota,
            dueño,
            fecha,
            hora,
            sintomas,
        };

        agregarCita(nuevaCita);

        setMascota("");
        setdueño("");
        setFecha("");
        setHora("");
        setSintomas("");
    };

    return (
        <>
            <h2>Crear nueva cita</h2>
            <form onSubmit={handleSubmit}>                
                <label>Nombre de la mascota</label>
                <input
                    type="text"
                    value={mascota}
                    className="u-full-width"
                    onChange={(e) => setMascota(e.target.value)}
                />                                
                <label>Nombre del dueño</label>
                <input
                    type="text"
                    value={dueño}
                    className="u-full-width"
                    onChange={(e) => setdueño(e.target.value)}
                />                
                
                <label>Fecha</label>
                <input
                    type="date"
                    value={fecha}
                    className="u-full-width"
                    onChange={(e) => setFecha(e.target.value)}
                />                
                <label>Hora</label>
                <input
                    type="time"
                    className="u-full-width"
                    value={hora}
                    onChange={(e) => setHora(e.target.value)}
                />                
                <label>Síntomas</label>
    <textarea
        value={sintomas}
        className="u-full-width"
        onChange={(e) => setSintomas(e.target.value)}
    />
    <button type="submit" className="u-full-width button-primary">Agregar Cita</button>
</form>
    </>
  )
}


export default Formulario;