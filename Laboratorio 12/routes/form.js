const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

router.get('/form', (req, res) => {
  res.render('form', { title: 'Enviar Datos' });
});

router.post('/form', (req, res) => {
  const dato = (req.body.dato || '').trim();
  const destino = path.join(__dirname, '..', 'data.txt');
  fs.appendFileSync(destino, dato + '\n', 'utf-8');
  res.redirect('/data');
});

router.get('/data', (req, res) => {
  const archivo = path.join(__dirname, '..', 'data.txt');
  const lista = fs.existsSync(archivo)
    ? fs.readFileSync(archivo, 'utf-8').split('\n').filter(Boolean)
    : [];
  res.render('data', { title: 'Datos Recibidos', lista });
});

module.exports = router;
