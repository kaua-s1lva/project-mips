import "./../styles/memoriaInstrucao.css"

function MemoriaInstrucao ({ comando }) {
    return (
        <div className="quadrado">
            <div className="memoriaInstrucao">{comando}</div>
            <p>Memória de instrução</p>
        </div>
    )
}

export default MemoriaInstrucao;