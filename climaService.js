const fetch = require('node-fetch');

class ClimaService {
  constructor(apiKey) {
    this.apiKey = apiKey;
  }

  async obterDadosClimaticos(localizacao) {
    try {
      const apiUrl = `http://api.openweathermap.oSrg/data/2.5/weather?q=${localizacao}&appid=${this.apiKey}&units=metric`;
      const response = await fetch(apiUrl);
      const data = await response.json();

      if (response.ok) {
        const temperatura = data.main.temp;
        const umidade = data.main.humidity;
        return { temperatura: temperatura.toFixed(2), umidade: umidade.toFixed(2) };
      } else {
        throw new Error('Erro ao obter dados climáticos: ' + data.message);
      }
    } catch (err) {
      throw new Error('Erro ao obter dados climáticos: ' + err.message);
    }
  }
}

module.exports = ClimaService;
