const Valores = require('../models/ValoresModel');
const ConvertService = require('../service/ConvertService');

class ValoresController {
  async store(request, response) {
    const valoresConversao = await ConvertService.getData();
    const { codein: moedaOriginal, code: moedaDaConversao, bid } = valoresConversao.USDBRL;
    const { valorEnviado } = request.body;

    const valorConvertido = (Number(valorEnviado) / Number(bid)).toFixed(2);

    const valores = new Valores({
      moedaOriginal, moedaDaConversao, valorEnviado, valorConvertido,
    });

    if (!valorEnviado) {
      return response.status(400).json({ error: 'Necessário enviar valor para conversão.' });
    }

    await valores.save({
      moedaOriginal, moedaDaConversao, valorEnviado, valorConvertido,
    });
    response.json(valores.body);
  }

  async update(request, response) {
    const { id } = request.params;
    const valor = await Valores.readOne(id);

    const valoresConversao = await ConvertService.getData();
    const { codein: moedaOriginal, code: moedaDaConversao, bid } = valoresConversao.USDBRL;
    const { valorEnviado } = request.body;

    const valorConvertido = (Number(valorEnviado) / Number(bid)).toFixed(2);

    const valorUpdate = new Valores({
      moedaOriginal, moedaDaConversao, valorEnviado, valorConvertido,
    });

    if (!valor) {
      return response.status(400).json({ error: 'Cálculo de conversão não existe.' });
    }

    if (!valorEnviado) {
      return response.status(400).json({ error: 'Necessário enviar valor para nova conversão.' });
    }

    await valorUpdate.update(id);
    response.json(valorUpdate.body);
  }

  async index(request, response) {
    const { orderBy } = request.query;
    const valores = await Valores.readAll(orderBy);

    response.json(valores);
  }

  async show(request, response) {
    const { id } = request.params;
    const valores = await Valores.readOne(id);

    response.json(valores);
  }

  async delete(request, response) {
    const { id } = request.params;
    await Valores.delete(id);

    response.sendStatus(204);
  }
}

module.exports = new ValoresController();
