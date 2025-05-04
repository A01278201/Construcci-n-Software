const express = require('express');
const router = express.Router();

// Helper para parsear lista de números
function parseNums(str) {
  return str.split(',').map(n => parseFloat(n)).filter(n => !isNaN(n));
}

router.get('/sum', (req, res) => {
  const nums = parseNums(req.query.nums || '');
  const sum = nums.reduce((a, b) => a + b, 0);
  res.send(`Suma de [${nums}]: ${sum}`);
});

router.get('/product', (req, res) => {
  const nums = parseNums(req.query.nums || '');
  const prod = nums.reduce((a, b) => a * b, 1);
  res.send(`Producto de [${nums}]: ${prod}`);
});

router.get('/average', (req, res) => {
  const nums = parseNums(req.query.nums || '');
  const avg = nums.length ? nums.reduce((a, b) => a + b, 0) / nums.length : 0;
  res.send(`Promedio de [${nums}]: ${avg}`);
});

module.exports = router;
