const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const preciosRouter = require('./routes/precios');
const servidor = express();
const PUERTO = 3000;

// Configuración de EJS
servidor.set('view engine', 'ejs');
servidor.set('views', path.join(__dirname, 'views'));

// Middleware
servidor.use(express.static(path.join(__dirname, 'public')));
servidor.use(bodyParser.urlencoded({ extended: false }));

// Rutas
servidor.use('/', preciosRouter);

// 404
servidor.use((req, res) => {
  res.status(404).render('404', { titulo: 'No Encontrado' });
});

servidor.listen(PUERTO, () => {
  console.log(`> Servidor escuchando en http://localhost:${PUERTO}`);
});