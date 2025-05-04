const fs = require('fs');
const path = require('path');
const archivoPath = path.join(__dirname, '..', 'data', 'precios.txt');

class Precio {
  constructor(valor) {
    this.valor = parseFloat(valor);
  }

  save() {
    fs.appendFileSync(archivoPath, this.valor + '\n', 'utf-8');
  }

  static fetchAll() {
    if (!fs.existsSync(archivoPath)) return [];
    return fs
      .readFileSync(archivoPath, 'utf-8')
      .split('\n')
      .filter(line => line.trim() !== '')
      .map(line => new Precio(line));
  }

  static calcularPrecioTotal() {
    return Precio.fetchAll().reduce((sum, p) => sum + p.valor, 0);
  }
}

const getAdd = (req, res) => {
  res.render('add', { titulo: 'Añadir Precio' });
};

const postAdd = (req, res) => {
  const { precio } = req.body;
  const nuevo = new Precio(precio);
  nuevo.save();
  res.redirect('/list');
};

const getList = (req, res) => {
  const precios = Precio.fetchAll();
  const total = Precio.calcularPrecioTotal();
  res.render('list', { titulo: 'Lista de Precios', precios, total });
};

module.exports = { getAdd, postAdd, getList };