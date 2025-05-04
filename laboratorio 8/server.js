// server.js
const http = require('http');
const fs = require('fs');
const path = require('path');
const PORT = 3000;

const server = http.createServer((req, res) => {
  console.log(`${req.method} ${req.url}`);

  if (req.method === 'GET' && req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
    return res.end('Servidor Node.js activo');
  }

  if (req.method === 'GET' && req.url === '/page') {
    const filePath = path.join(__dirname, 'pages', 'page.html');
    if (fs.existsSync(filePath)) {
      const html = fs.readFileSync(filePath, 'utf-8');
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      return res.end(html);
    }
  }

  res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
  res.end('404 — No existe esa ruta');
});

server.listen(PORT, () => {
  console.log(`🔗 Servidor escuchando en http://localhost:${PORT}`);
});
