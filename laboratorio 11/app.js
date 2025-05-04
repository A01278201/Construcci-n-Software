const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const mathRoutes = require('./routes/mathRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = 3000;

// Middleware global
app.use((req, res, next) => {
  console.log(`--> ${req.method} ${req.url}`);
  next();
});

// Body parser
app.use(bodyParser.urlencoded({ extended: false }));

// Rutas modularizadas
app.use('/math', mathRoutes);
app.use('/user', userRoutes);

// Ruta raíz
app.get('/', (req, res) => {
  res.send(`<h1>Laboratorio Express con npm</h1>
    <ul>
      <li><a href="/math/sum?nums=1,2,3">/math/sum?nums=1,2,3</a></li>
      <li><a href="/math/product?nums=2,3,4">/math/product?nums=2,3,4</a></li>
      <li><a href="/math/average?nums=5,15,20">/math/average?nums=5,15,20</a></li>
      <li><a href="/user/register">/user/register</a></li>
      <li><a href="/user/list">/user/list</a></li>
    </ul>`);
});

// 404
app.use((req, res) => {
  res.status(404).send('<h1>404 - Página no encontrada</h1>');
});

app.listen(PORT, () => console.log(`Servidor iniciado en http://localhost:${PORT}`));
