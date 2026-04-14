import { useState } from "react";


function Formulario() {
    const [mascota, setMascota] = useState("");
    const [dueño, setdueño] = useState("");
    const [fecha, setFecha] = useState("");
    const [hora, setHora] = useState("");
    const [sintomas, setSintomas] = useState("");
    const [citas, setCitas] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const nuevaCita = {
            id: Date.now(),
            mascota,
            dueño,
            fecha,
            hora,
            sintomas,
        };

        setCitas([...citas, nuevaCita]);

        setMascota("");
        setdueño("");
        setFecha("");
        setHora("");
        setSintomas("");
    };

    return (
        <div>
            <h2>Crear nueva cita</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nombre de la mascota</label>
                    <input
                        type="text"
                        value={mascota}
                        onChange={(e) => setMascota(e.target.value)}
                    />
                </div>

                <div>
                    <label>Nombre del dueño</label>
                    <input
                        type="text"
                        value={dueño}
                        onChange={(e) => setdueño(e.target.value)}
                    />
                </div>

                <div>
                    <label>Fecha</label>
                    <input
                        type="date"
                        value={fecha}
                        onChange={(e) => setFecha(e.target.value)}
                    />
                </div>

                <div>
                    <label>Hora</label>
                    <input
                        type="time"
                        value={hora}
                        onChange={(e) => setHora(e.target.value)}
                    />
                </div>

                <div>
                    <label>Síntomas</label>
                    <textarea
                        value={sintomas}
                        onChange={(e) => setSintomas(e.target.value)}
                    />
                </div>

                <button type="submit">Agregar cita</button>
            </form>

            {citas.length > 0 && (
                <div>
                    <h3>Lista de citas</h3>
                    <ul>
                        {citas.map((cita) => (
                            <li key={cita.id}>
                                <strong>{cita.mascota}</strong> - {cita.dueño} - {cita.fecha}{" "}
                                {cita.hora} - {cita.sintomas}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default Formulario;