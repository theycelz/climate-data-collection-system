const fetch = require('node-fetch');

class ClimaService {
  constructor(apiKey) {
    this.apiKey = apiKey;
  }

  async obterDadosClimaticos(localizacao) {
    const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${localizacao}&appid=${this.apiKey}&units=metric`;

    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error('Erro ao obter dados climáticos: ' + response.statusText);
    }

    const data = await response.json();

    const temperatura = data.main.temp.toFixed(2);
    const umidade = data.main.humidity.toFixed(2);

    return { temperatura, umidade };
  }
}

module.exports = ClimaService;