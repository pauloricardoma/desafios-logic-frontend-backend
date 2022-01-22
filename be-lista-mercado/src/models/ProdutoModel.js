const mongoose = require('mongoose');

const ProdutoSchema = new mongoose.Schema({
  item: { type: String, required: true },
  preco: { type: Number, required: true },
});

const ProdutoModel = mongoose.model('produtos', ProdutoSchema);

class Produto {
  constructor(body) {
    this.body = body;
    this.produto = null;
  }

  async save() {
    this.cleanUp();

    this.produto = await ProdutoModel.create(this.body);
  }

  async update(id) {
    if (typeof id !== 'string') return;
    this.cleanUp();

    this.produto = await ProdutoModel.findByIdAndUpdate(
      id,
      this.body,
      { new: true },
    );
  }

  static async readAll(orderBy = 'asc') {
    if (typeof orderBy !== 'string') return;
    const order = orderBy.toLowerCase() === 'desc' ? 'desc' : 'asc';
    const produto = await ProdutoModel.find().sort({ item: order });
    return produto;
  }

  static async readOne(id) {
    if (typeof id !== 'string') return;
    const produto = await ProdutoModel.findById(id);
    return produto;
  }

  static async delete(id) {
    if (typeof id !== 'string') return;
    const produto = await ProdutoModel.findByIdAndDelete(id);
    return produto;
  }

  cleanUp() {
    if (typeof this.body.item !== 'string') {
      this.body.item = '';
    }

    if (typeof this.body.preco !== 'number') {
      this.body.preco = 0;
    }

    this.body = {
      item: this.body.item,
      preco: this.body.preco,
    };
  }
}

module.exports = Produto;
