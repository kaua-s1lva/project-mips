import React, { useState } from 'react';

function LinhaComando({ onCommandSubmit }) {
    const [command, setCommand] = useState("");

    const handleInputChange = (event) => {
        setCommand(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (command.trim()) {
            onCommandSubmit(command); // Envia o comando para ser processado
            setCommand(""); // Limpa o campo de texto
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <textarea
                value={command}
                onChange={handleInputChange}
                placeholder="Digite seu comando MIPS..."
            />
            <button type="submit">Enviar</button>
        </form>
    );
}

export default LinhaComando;
