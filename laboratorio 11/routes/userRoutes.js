const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

const DATA_FILE = path.join(__dirname, '..', 'users.txt');

// Mostrar formulario de registro
router.get('/register', (req, res) => {
  res.send(`
    <h2>Registro de Usuario</h2>
    <form action="/user/register" method="POST">
      <label>Nombre: <input type="text" name="name" required></label><br>
      <label>Email: <input type="email" name="email" required></label><br>
      <button type="submit">Enviar</button>
    </form>
  `);
});

// Procesar registro y guardar en archivo
router.post('/register', (req, res) => {
  const { name, email } = req.body;
  const line = `${name.trim()} <${email.trim()}>
`;
  fs.appendFileSync(DATA_FILE, line, 'utf-8');
  res.send(`<p>Usuario registrado: ${line}</p><a href="/user/list">Ver todos</a>`);
});

// Listar usuarios registrados
router.get('/list', (req, res) => {
  const exists = fs.existsSync(DATA_FILE);
  const content = exists ? fs.readFileSync(DATA_FILE, 'utf-8') : '';
  const lines = content.split('\n').filter(Boolean);
  const items = lines.map(l => `<li>${l}</li>`).join('');
  res.send(`<h2>Usuarios Registrados</h2><ul>${items}</ul><a href="/">Inicio</a>`);
});

module.exports = router;
