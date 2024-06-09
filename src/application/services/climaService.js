
const axios = require('axios');

class ClimaService {
  constructor(apiKey) {
    this.apiKey = apiKey;
  }

  async obterDadosClimaticos(localizacao) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${localizacao}&appid=${this.apiKey}&units=metric`;

    try {
      const response = await axios.get(url);
      const { temp: temperatura, humidity: umidade } = response.data.main;
      return { temperatura, umidade };
    } catch (error) {
      console.error('Erro ao obter dados climáticos:', error.message);
      throw new Error('Erro ao obter dados climáticos');
    }
  }
}

module.exports = ClimaService;
