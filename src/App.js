import './App.css';

import MemoriaInstrucao from './components/MemoriaInstrucao';
import LinhaComando from './components/LinhasComando';
import { useState } from 'react';
import BancoReg from './components/BancoReg';
import ButtonPlay from './components/ButtonPlay';

function App() {
  const [currentCommand, setCurrentCommand] = useState("");

  const handleCommandSubmit = (command) => {
    setCurrentCommand(command); // Armazena o comando no estado

    // Divide o comando em partes
    const parts = command.split(/[ ,]+/);
    const instruction = parts[0];
    const register1 = parts[1];
    const register2 = parts[2];
    const register3 = parts[3];

    console.log("Instrução:", instruction);
    console.log("Registrador 1:", register1);
    console.log("Registrador 2:", register2);
    console.log("Registrador 3:", register3);

    // Aqui você pode fazer o que quiser com as variáveis
  };

  return (
    <div className="App">
      <div className="layout">
        <LinhaComando onCommandSubmit={handleCommandSubmit} />
        <ButtonPlay />
        <div className="table">
          <MemoriaInstrucao comando={currentCommand} />
          <BancoReg />
        </div>
      </div>
    </div>
  );
}

export default App;
