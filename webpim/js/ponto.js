// automação e bloqueio de data e hora atual 
function initializeForm() {
  // Bloquear a alteração dos campos de data e hora
  document.getElementById('currentDate').readOnly = true;
  document.getElementById('currentTime').readOnly = true;

  // Função para atualizar os campos de data e hora a cada segundo
  function updateDateTime() {
    var currentDateField = document.getElementById('currentDate');
    var currentTimeField = document.getElementById('currentTime');

    var currentDate = new Date();
    var day = currentDate.getDate().toString().padStart(2, '0');
    var month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    var year = currentDate.getFullYear();
    var formattedDate = day+ '/' + month + '/' + year;

    var hours = currentDate.getHours().toString().padStart(2, '0');
    var minutes = currentDate.getMinutes().toString().padStart(2, '0');
    var formattedTime = hours + ':' + minutes;

    currentDateField.value = formattedDate;
    currentTimeField.value = formattedTime;
  }

  // Chamar a função de atualização a cada segundo
  updateDateTime();
  setInterval(updateDateTime, 1000);
}

document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('form');
  const successMessage = document.createElement('h3');
  successMessage.style.color = 'white'; /* Cor verde */
  successMessage.style.fontWeight = 'bold';
  successMessage.style.marginTop = '20px';
  successMessage.style.display = 'none';
  
  form.addEventListener('submit', function (event) {
      event.preventDefault(); // Impede o envio do formulário padrão
      // Simula um envio assíncrono (pode ser substituído pelo código de envio real)
      setTimeout(function () {
          successMessage.textContent = 'Ponto cadastrado com sucesso!';
          successMessage.style.display = 'block';
          form.reset(); // Limpa o formulário após o sucesso
      }, 1000); // Tempo de simulação de envio assíncrono (1 segundo)
  });

  form.appendChild(successMessage);
});
