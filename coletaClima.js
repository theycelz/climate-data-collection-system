const { Client } = require('pg');
const ClimaService = require('./climaService');
const dbConfig = require('./dbConfig');

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

const localizacao = process.argv[2];

if (!localizacao) {
  console.error('Por favor, forneça uma localização como argumento.');
  process.exit(1);
}


const apiKey = '6aa4c372f15508b86bde02437c8bc053';

const climaService = new ClimaService(apiKey);

climaService.obterDadosClimaticos(localizacao)
  .then(({ temperatura, umidade }) => {
    inserirDadosClimaticos(localizacao, temperatura, umidade);
  })
  .catch(err => {
    console.error(err.message);
  });
