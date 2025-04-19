// Ejercicio 1: tabla de potencias
function ejercicio1() {
    let n = parseInt(prompt("Ingresa un número:"));
    let html = "<table border='1'><tr><th>Número</th><th>Cuadrado</th><th>Cubo</th></tr>";
    for (let i = 1; i <= n; i++) {
      html += `<tr><td>${i}</td><td>${i ** 2}</td><td>${i ** 3}</td></tr>`;
    }
    html += "</table>";
    document.getElementById("resultado1").innerHTML = html;
  }
  
  // Ejercicio 2: suma aleatoria
  function ejercicio2() {
    const a = Math.floor(Math.random() * 10);
    const b = Math.floor(Math.random() * 10);
    const inicio = Date.now();
    let respuesta = parseInt(prompt(`¿Cuánto es ${a} + ${b}?`));
    const fin = Date.now();
    const tiempo = ((fin - inicio) / 1000).toFixed(2);
    const correcto = respuesta === (a + b);
    document.getElementById("resultado2").innerHTML = `
      <p>Tu respuesta fue ${respuesta} y es ${correcto ? "correcta ✅" : "incorrecta ❌"}.</p>
      <p>Tiempo: ${tiempo} segundos.</p>`;
  }
  
  // Ejercicio 3: contar negativos, ceros y positivos con entrada del usuario
  function contador(arr) {
    let negativos = 0, ceros = 0, positivos = 0;
    for (let num of arr) {
      if (num < 0) negativos++;
      else if (num === 0) ceros++;
      else positivos++;
    }
    return { negativos, ceros, positivos };
  }
  
  function ejercicio3() {
    const input = prompt("Ingresa números separados por comas (ej: 3,4,-1,0,5):");
    if (!input) return;
  
    const arr = input.split(',').map(x => parseInt(x.trim()));
    const resultado = contador(arr);
  
    document.getElementById("resultado3").innerHTML = `
      <p>Negativos: ${resultado.negativos}</p>
      <p>Ceros: ${resultado.ceros}</p>
      <p>Positivos: ${resultado.positivos}</p>`;
  }
  
  // Ejercicio 4: promedios con entrada del usuario
  function promedios(matriz) {
    return matriz.map(fila => {
      const suma = fila.reduce((a, b) => a + b, 0);
      return (suma / fila.length).toFixed(2);
    });
  }
  
  function ejercicio4() {
    const input = prompt("Ingresa filas de números separados por comas y punto y coma (;)\nEj: 1,2,3;4,5;6,7,8");
    if (!input) return;
  
    const filas = input.split(';').map(fila =>
      fila.split(',').map(x => parseFloat(x.trim()))
    );
    const resultado = promedios(filas);
  
    let html = "";
    resultado.forEach((prom, i) => {
      html += `<p>Promedio de fila ${i + 1}: ${prom}</p>`;
    });
  
    document.getElementById("resultado4").innerHTML = html;
  }
  
  // Ejercicio 5: número inverso
  function inverso(n) {
    return parseInt(n.toString().split("").reverse().join(""));
  }
  
  function ejercicio5() {
    const numero = parseInt(prompt("Ingresa un número:"));
    const inv = inverso(numero);
    document.getElementById("resultado5").innerHTML = `<p>Inverso: ${inv}</p>`;
  }
  
  // Ejercicio 6: Objeto Círculo
function Circulo(radio) {
    this.radio = radio;
  
    this.area = function () {
      return (Math.PI * this.radio ** 2).toFixed(2);
    };
  
    this.perimetro = function () {
      return (2 * Math.PI * this.radio).toFixed(2);
    };
  }
  
// Ejercicio 6: Objeto Círculo con unidades en cm
function Circulo(radio) {
    this.radio = radio;
  
    this.area = function () {
      return (Math.PI * this.radio ** 2).toFixed(2);
    };
  
    this.perimetro = function () {
      return (2 * Math.PI * this.radio).toFixed(2);
    };
  }
  
  function ejercicio6() {
    const r = parseFloat(prompt("Ingresa el radio del círculo en centímetros (cm):"));
    if (isNaN(r) || r <= 0) {
      document.getElementById("resultado6").innerHTML = "<p>Por favor ingresa un número válido mayor a 0.</p>";
      return;
    }
  
    const c = new Circulo(r);
    document.getElementById("resultado6").innerHTML = `
      <p>Radio: ${r} cm</p>
      <p>Área: ${c.area()} cm²</p>
      <p>Perímetro: ${c.perimetro()} cm</p>`;
  }
  