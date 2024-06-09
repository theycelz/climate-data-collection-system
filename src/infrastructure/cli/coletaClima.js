const ClimaService = require('../../application/services/ClimaService');
const ClimaRepository = require('../../domain/repositories/ClimaRepository');
const Clima = require('../../domain/entities/Clima');

const localizacao = process.argv[2];

if (!localizacao) {
  console.error('Por favor, forneça uma localização como argumento.');
  process.exit(1);
}

const apiKey = '6aa4c372f15508b86bde02437c8bc053';

const climaService = new ClimaService(apiKey);
const climaRepository = new ClimaRepository();

climaService.obterDadosClimaticos(localizacao)
  .then(({ temperatura, umidade }) => {
    console.log(`Dados climáticos obtidos: Temperatura = ${temperatura}, Umidade = ${umidade}`);
    const clima = new Clima(localizacao, temperatura, umidade);
    climaRepository.inserir(clima);
  })
  .catch(err => {
    console.error('Erro ao obter dados climáticos:', err.message);
  });
