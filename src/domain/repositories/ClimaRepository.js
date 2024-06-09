
const { Client } = require('pg');
const dbConfig = require('../../infrastructure/db/dbConfig');

class ClimaRepository {
  async inserir(clima) {
    const client = new Client(dbConfig);
    await client.connect();

    try {
      const query = 'INSERT INTO dados_climaticos (localizacao, temperatura, umidade, data_hora) VALUES ($1, $2, $3, NOW())';
      const values = [clima.localizacao, clima.temperatura, clima.umidade];
      await client.query(query, values);
      console.log('Dados climáticos inseridos com sucesso.');
    } catch (err) {
      console.error('Erro ao inserir dados climáticos:', err);
    } finally {
      await client.end();
    }
  }
}

module.exports = ClimaRepository;
