
function entrar() {
  let usuario = document.querySelector('#Userlogin'); // Corrigido o seletor
  let senha = document.querySelector('#Senhalogin'); // Corrigido o seletor
  let msgError = document.querySelector('#msgError');
  let listaUser = JSON.parse(localStorage.getItem('listaUser')) || [];
  let userValid = {
    nome: '',
    user: '',
    senha: ''
  };

  listaUser.forEach((item) => {
    if (usuario.value == item.userCad && senha.value == item.senhaCad) {
      userValid = {
        nome: item.nomeCad,
        user: item.userCad,
        senha: item.senhaCad
      };
    }
  });

  if (usuario.value == userValid.user && senha.value == userValid.senha) {
    msgSuccess.setAttribute('style', 'display: block')
    msgSuccess.innerHTML = '<strong>Entrando...</strong>'
    msgError.setAttribute('style', 'display: none')
    msgError.innerHTML = ''
    
    setTimeout(()=>{
      window.location.href = 'http://127.0.0.1:5500/pages/PainelRh.html';
    }, 3000)
    
    let mathRandom = Math.random().toString(16).substr(2);
    let token = mathRandom + mathRandom;

    localStorage.setItem('token', token);
    localStorage.setItem('userLogado', JSON.stringify(userValid));
  } else {
    msgError.setAttribute('style', 'display: block');
    msgError.innerHTML = 'Usuário ou senha incorretos';
  }
}

