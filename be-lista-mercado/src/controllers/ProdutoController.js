const Produto = require('../models/ProdutoModel');

class ProdutoController {
  async store(request, response) {
    const produto = new Produto(request.body);
    const { item, preco } = produto.body;

    if (!item) {
      return response.status(400).json({ error: 'Item é obrigatório.' });
    }

    if (!preco) {
      return response.status(400).json({ error: 'Preco é obrigatório.' });
    }

    await produto.save({ item, preco });
    response.json(produto.body);
  }

  async update(request, response) {
    const { id } = request.params;
    const produto = await Produto.readOne(id);
    const produtoUpdate = new Produto(request.body);
    const { item, preco } = produtoUpdate.body;

    if (!produto) {
      return response.status(400).json({ error: 'Produto não encontrado.' });
    }

    if (!item) {
      return response.status(400).json({ error: 'Item é obrigatório.' });
    }

    if (!preco) {
      return response.status(400).json({ error: 'Preco é obrigatório.' });
    }

    await produtoUpdate.update(id);
    response.json(produtoUpdate.body);
  }

  async index(request, response) {
    const { orderBy } = request.query;
    const produto = await Produto.readAll(orderBy);

    response.json(produto);
  }

  async show(request, response) {
    const { id } = request.params;
    const produto = await Produto.readOne(id);

    response.json(produto);
  }

  async delete(request, response) {
    const { id } = request.params;
    await Produto.delete(id);

    response.sendStatus(204);
  }
}

module.exports = new ProdutoController();
