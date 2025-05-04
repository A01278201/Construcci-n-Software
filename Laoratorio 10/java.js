const http = require('http');
const fs = require('fs');
const port = 3000;

// Función para parsear el body de peticiones 
function parseBody(request, callback) {
    let body = '';
    request.on('data', chunk => {
        body += chunk.toString();
    });
    request.on('end', () => {
        callback(body);
    });
}

const server = http.createServer((req, res) => {
    console.log(`${req.method} ${req.url}`);

    // Ruta principal
    if (req.method === 'GET' && req.url === '/') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(`
            <h1>Bienvenido al Laboratorio 10</h1>
            <nav>
              <a href="/">Inicio</a> |
              <a href="/ruta1">Ruta 1</a> |
              <a href="/ruta2">Ruta 2</a> |
              <a href="/formulario">Formulario</a>
            </nav>
        `);
    }
    // Ruta 1: texto plano
    else if (req.method === 'GET' && req.url === '/ruta1') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Esta es la ruta 1');
    }
    // Ruta 2: JSON
    else if (req.method === 'GET' && req.url === '/ruta2') {
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify({ mensaje: 'Hola desde ruta2' }));
    }
    // Formulario 
    else if (req.method === 'GET' && req.url === '/formulario') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(`
            <h2>Formulario de envío</h2>
            <form action="/submit" method="POST">
              <input type="text" name="dato" placeholder="Escribe algo" required />
              <button type="submit">Enviar</button>
            </form>
        `);
    }
    // Procesar formulario
    else if (req.method === 'POST' && req.url === '/submit') {
        parseBody(req, body => {
            const dato = decodeURIComponent(body.split('=')[1] || '');
            fs.appendFileSync('datos.txt', dato + '\n');
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end('Datos recibidos y guardados: ' + dato);
        });
    }
    else {
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.end('<h1>404 - Ruta no encontrada</h1>');
    }
});

server.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
