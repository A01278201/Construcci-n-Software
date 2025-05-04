// average.js
function promedio(arr) {
  if (!arr.length) return 0;
  const suma = arr.reduce((acc, x) => acc + x, 0);
  return suma / arr.length;
}

// Ejemplo de uso:
const numeros = [1, 2, 3, 4, 5];
console.log(`Arreglo: [${numeros.join(', ')}]`);
console.log(`Promedio: ${promedio(numeros)}`);
