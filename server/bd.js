// Importe o módulo mysql2
const mysql = require('mysql2');

// Crie uma conexão com o banco de dados
const connection = mysql.createConnection({
    host: 'localhost', // Endereço do servidor do banco de dados
    user: 'retch_banco', // Nome de usuário do banco de dados
    password: '123456', // Senha do banco de dados
    database: 'retch' // Nome do banco de dados
});

// Teste a conexão
connection.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados: ', err);
        return;
    }
    console.log('Conexão bem sucedida ao banco de dados!');
});

// Exporte a conexão para que possa ser usada em outros arquivos
module.exports = connection;
