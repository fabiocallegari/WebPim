var token = localStorage.getItem('token');

if (token) {
  // Recupere as informações do usuário associadas ao token no localStorage
  var userValid = JSON.parse(localStorage.getItem('userLogado'));

  if (userValid) {
    var nomeUsuario = document.getElementById('nomeUsuario');
    nomeUsuario.textContent = `Bem-vindo, ${userValid.nome}`;
  }
  }