// chosenProblem.js
function factorial(n) {
  if (n < 0) return undefined;
  return n === 0 ? 1 : n * factorial(n - 1);
}

// Ejemplo de uso:
const valor = 6;
console.log(`Factorial de ${valor}: ${factorial(valor)}`);
