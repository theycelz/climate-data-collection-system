class Clima {
  constructor(localizacao, temperatura, umidade) {
    this.localizacao = localizacao;
    this.temperatura = temperatura;
    this.umidade = umidade;
    this.dataHora = new Date();
  }
}

module.exports = Clima;
