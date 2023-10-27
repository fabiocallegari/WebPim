import { useState } from 'react';
import Image from 'next/image';
import '../app/page.module.css'
import Cadastro from './cadastro';

export default function Home() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    
  };

  return (
    <>
      
        <form onSubmit={handleSubmit} id="login-form">
          <div className="container bg-dark text-white text-center" id="containerLogin">
            <div className="container text-center">
              <div className="logo">
                <Image src="/image/logoRetch.png" alt="Logo" className="rounded-circle" id="logoLogin" width={100} height={100} />
              </div>
            </div>
            <h2 className="fw-bold mb-3 text-uppercase">Login</h2>
            <p className="text-secondary mb-4 ">Entre com seu Usuário e Senha</p>
            <div className="form-outline form-white mb-4">
              <input
                type="text"
                id="Userlogin"
                className="form-control form-control-lg text-center"
                placeholder="Usuário"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
              />
            </div>
            <div className="form-outline form-white mb-4">
              <input
                type="password"
                id="Senhalogin"
                className="form-control form-control-lg text-center"
                required
                placeholder="Senha"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
              <i className="fa fa-eye" aria-hidden="true"></i>
            </div>
            <button className="btn btn-outline-success btn-lg px-5" type="submit">
              LOGIN
            </button>
            <p className="mb-0 mt-5">
              Não possui cadastro ?{' '}
              <a href="./cadastro" className="text-warning text-decoration-none fw-bold">
                Solicite Aqui
              </a>
            </p>
          </div>
        </form>
    </>
  );
}