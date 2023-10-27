import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Cadastro() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');
    const [erro, setErro] = useState('');
    const router = useRouter();

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (senha !== confirmarSenha) {
            setErro('As senhas não coincidem');
            return;
        }
        try {
            const response = await fetch('/api/cadastro', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ nome, email, senha }),
            });
            if (response.ok) {
                router.push('/Home');
            } else {
                setErro('Ocorreu um erro ao cadastrar');
            }
        } catch (error) {
            setErro('Ocorreu um erro ao cadastrar');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Nome:
                <input type="text" value={nome} onChange={(event) => setNome(event.target.value)} required />
            </label>
            <label>
                E-mail:
                <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} required />
            </label>
            <label>
                Senha:
                <input type="password" value={senha} onChange={(event) => setSenha(event.target.value)} required />
            </label>
            <label>
                Confirmar senha:
                <input type="password" value={confirmarSenha} onChange={(event) => setConfirmarSenha(event.target.value)} required />
            </label>
            {erro && <p>{erro}</p>}
            <button type="submit">Cadastrar</button>
        </form>
    );
}
