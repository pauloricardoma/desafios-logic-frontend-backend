const mongoose = require('mongoose');

const ValoresSchema = new mongoose.Schema({
  moedaOriginal: { type: String, required: true },
  moedaDaConversao: { type: String, required: true },
  valorEnviado: { type: Number, required: true },
  valorConvertido: { type: Number, required: true },
});

const ValoresModel = mongoose.model('valores', ValoresSchema);

class Valores {
  constructor(body) {
    this.body = body;
    this.valor = null;
  }

  async save() {
    this.cleanUp();

    this.valor = await ValoresModel.create(this.body);
  }

  async update(id) {
    if (typeof id !== 'string') return;
    this.cleanUp();

    this.valor = await ValoresModel.findByIdAndUpdate(
      id,
      this.body,
      { new: true },
    );
  }

  static async readAll() {
    const valor = await ValoresModel.find();
    return valor;
  }

  static async readOne(id) {
    if (typeof id !== 'string') return;
    const valor = await ValoresModel.findById(id);
    return valor;
  }

  static async delete(id) {
    if (typeof id !== 'string') return;
    const valor = await ValoresModel.findByIdAndDelete(id);
    return valor;
  }

  cleanUp() {
    if (typeof this.body.moedaOriginal !== 'string') {
      this.body.item = '';
    }

    if (typeof this.body.moedaDaConversao !== 'string') {
      this.body.preco = '';
    }

    if (typeof this.body.valorEnviado !== 'number') {
      this.body.item = 0;
    }

    if (typeof this.body.valorConvertido !== 'number') {
      this.body.preco = 0;
    }

    this.body = {
      moedaOriginal: this.body.moedaOriginal,
      moedaDaConversao: this.body.moedaDaConversao,
      valorEnviado: this.body.valorEnviado,
      valorConvertido: this.body.valorConvertido,
    };
  }
}

module.exports = Valores;
