const { Client } = require('pg');
const ClimaService = require('./climaService');

// Configurações do banco de dados PostgreSQL
const dbConfig = {
  user: '',
  host: 'localhost',
  database: 'seu_banco_de_dados',
  password: 'sua_senha',
  port: 5432,
};

// Função para inserir os dados climáticos no banco de dados
async function inserirDadosClimaticos(localizacao, temperatura, umidade) {
  const client = new Client(dbConfig);
  await client.connect();

  try {
    const query = 'INSERT INTO dados_climaticos (localizacao, temperatura, umidade, data_hora) VALUES ($1, $2, $3, NOW())';
    const values = [localizacao, temperatura, umidade];
    await client.query(query, values);
    console.log('Dados climáticos inseridos com sucesso.');
  } catch (err) {
    console.error('Erro ao inserir dados climáticos:', err);
  } finally {
    await client.end();
  }
}

// Localização fornecida como argumento ao executar o script (pode ser definida por você)
const localizacao = process.argv[2];

if (!localizacao) {
  console.error('Por favor, forneça uma localização como argumento.');
  process.exit(1);
}

// Substitua 'sua_chave_de_api' pela sua chave de API do OpenWeatherMap
const apiKey = 'sua_chave_de_api';

// Instanciando a classe ClimaService com a chave de API
const climaService = new ClimaService(apiKey);

// Chamando a função obterDadosClimaticos da instância de ClimaService
climaService.obterDadosClimaticos(localizacao)
  .then(({ temperatura, umidade }) => {
    // Chame a função para inserir os dados climáticos no banco de dados
    inserirDadosClimaticos(localizacao, temperatura, umidade);
  })
  .catch(err => {
    console.error(err.message);
  });
