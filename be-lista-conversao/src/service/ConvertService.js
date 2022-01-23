const HttpClient = require('../utils/HttpClient');

class ConvertService {
  constructor() {
    this.httpClient = new HttpClient('https://economia.awesomeapi.com.br');
  }

  async getData() {
    return this.httpClient.get('/last/USD-BRL');
  }
}

module.exports = new ConvertService();
