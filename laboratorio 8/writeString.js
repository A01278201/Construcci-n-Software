// writeString.js
const fs = require('fs');
const path = require('path');

function escribeEnArchivo(texto, nombreArchivo = 'output.txt') {
  const ruta = path.join(__dirname, nombreArchivo);
  fs.writeFileSync(ruta, texto, 'utf-8');
  console.log(`✔ Texto escrito en ${nombreArchivo}`);
}

// Ejemplo de uso:
const miTexto = '¡Hola desde Node.js!';
escribeEnArchivo(miTexto);
