import { useState } from 'react';

export default function RegistroPonto() {
    const [data, setData] = useState('');
    const [horaEntrada, setHoraEntrada] = useState('');
    const [horaSaida, setHoraSaida] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const registroPonto = { data, horaEntrada, horaSaida };
        const response = await fetch('/api/registroponto', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(registroPonto),
        });
        const data = await response.json();
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Data:
                <input type="date" value={data} onChange={(e) => setData(e.target.value)} />
            </label>
            <label>
                Hora de entrada:
                <input type="time" value={horaEntrada} onChange={(e) => setHoraEntrada(e.target.value)} />
            </label>
            <label>
                Hora de saída:
                <input type="time" value={horaSaida} onChange={(e) => setHoraSaida(e.target.value)} />
            </label>
            <button type="submit">Registrar ponto</button>
        </form>
    );
}
