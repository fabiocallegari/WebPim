import { useState } from 'react';

function EmitirFolha() {
    const [mesAno, setMesAno] = useState('');
    const [nomeFuncionario, setNomeFuncionario] = useState('');
    const [salarioBase, setSalarioBase] = useState('');
    const [folhaGerada, setFolhaGerada] = useState(null);

    function handleEmitirFolha() {
        // Aqui você pode processar as informações inseridas pelo usuário e gerar a folha de pagamento.
        // Por exemplo:
        const folha = {
            mesAno,
            nomeFuncionario,
            salarioBase,
            // Adicione aqui os demais campos da folha de pagamento.
        };
        setFolhaGerada(folha);
    }

    return (
        <div>
            <h1>Emitir Folha de Pagamento</h1>
            <label>
                Mês/Ano:
                <input type="text" value={mesAno} onChange={(e) => setMesAno(e.target.value)} />
            </label>
            <label>
                Nome do Funcionário:
                <input type="text" value={nomeFuncionario} onChange={(e) => setNomeFuncionario(e.target.value)} />
            </label>
            <label>
                Salário Base:
                <input type="text" value={salarioBase} onChange={(e) => setSalarioBase(e.target.value)} />
            </label>
            <button onClick={handleEmitirFolha}>Emitir Folha</button>
            {folhaGerada && (
                <div>
                    <h2>Folha de Pagamento Gerada:</h2>
                    <p>Mês/Ano: {folhaGerada.mesAno}</p>
                    <p>Nome do Funcionário: {folhaGerada.nomeFuncionario}</p>
                    <p>Salário Base: {folhaGerada.salarioBase}</p>
                    {/* Adicione aqui os demais campos da folha de pagamento. */}
                </div>
            )}
        </div>
    );
}

export default EmitirFolha;
