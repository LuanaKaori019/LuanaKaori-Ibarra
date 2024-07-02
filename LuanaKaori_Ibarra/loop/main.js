//Ejercicio 1: Juego del número secreto
let numeroSecreto = 15;  
let intentos = 0;
let adivinado = false;

while (!adivinado) {
  let numeroIngresado = parseInt(prompt("Ingresa un número:"));
  intentos++;
  
  if (numeroIngresado > numeroSecreto) {
    console.log("El número ingresado es mayor que el secreto");
  } else if (numeroIngresado < numeroSecreto) {
    console.log("El número ingresado es menor que el secreto");
  } else {
    adivinado = true;
    console.log(`¡Acertaste! El número secreto era ${numeroSecreto} y has realizado ${intentos} intentos.`);
  }
}

//Ejercicio 2: Mostrar todos los divisores de un número

let numero = parseInt(prompt("Ingresa un número:"));
console.log(`Los divisores de ${numero} son:`);

for (let i = 1; i <= numero; i++) {
  if (numero % i === 0) {
    console.log(i);
  }
}

//Ejercicio 3: Cadena de Ding Dong
function RingBell() {
    console.log("Ding Dong");
    return "Ding Dong";
  }
  
  let veces = parseInt(prompt("¿Cuántas veces quieres escuchar la campana?"));
  let resultado = "";
  
  for (let i = 0; i < veces; i++) {
    resultado += RingBell();
    if (i < veces - 1) {
      resultado += ", ";
    }
  }
  
  console.log(resultado);
//Ejercicio 4: Fechas mayores o iguales a la fecha límite
const dateLimit = new Date("1997-08-03");
const dates = ["1984-02-18", "1998-03-02", "1973-07-15", "2024-10-31", "2081-01-09"];

console.log("Fechas mayores o iguales a la fecha límite:");
for (let date of dates) {
  if (new Date(date) >= dateLimit) {
    console.log(date);
  }
}
//Ejercicio 5: Matriz de colores

let colores = ["Rojo", "Verde", "Azul", "Violeta", "Marrón", "Negro", "Blanco"];

for (let color of colores) {
  console.log(color);
}
//Ejercicio 6: Función para imprimir colores

function imprimirColores(colores) {
    for (let color of colores) {
      console.log(color);
    }
  }
  
  imprimirColores(["Rojo", "Verde", "Azul", "Violeta", "Marrón", "Negro", "Blanco"]);
//Ejercicio 7: Doble de cada número
let numeros = [5, 7, 1, 3, 50];

for (let numero of numeros) {
  console.log(`El número es ${numero} y su doble es ${numero * 2}`);
}
//Ejercicio 8: Presentación de la familia

let familia = [
    { nombre: 'María', apellido: 'López', edad: 40, miembro: 'madre' },
    { nombre: 'Juan', apellido: 'Pérez', edad: 38, miembro: 'padre' },
    { nombre: 'Romina', apellido: 'Pérez', edad: 13, miembro: 'hija' },
    { nombre: 'Tomás', apellido: 'Pérez', edad: 10, miembro: 'hijo' }
  ];
  
  function presentarFamilia(familia) {
    for (let miembro of familia) {
      console.log(`Hola soy ${miembro.nombre} ${miembro.apellido} (${miembro.miembro}) y tengo ${miembro.edad} años.`);
    }
  }
  
  presentarFamilia(familia);
//nivel Alto

//Ejercicio 1: Suma de números pares e impares

let sumaPares = 0;
let sumaImpares = 0;
let numero;

do {
  numero = parseInt(prompt("Ingresa un número (0 para terminar):"));

  if (numero !== 0) {
    if (numero % 2 === 0) {
      sumaPares += numero;
    } else {
      sumaImpares += numero;
    }
  }

} while (numero !== 0);

console.log(`Número par: ${sumaPares}`);
console.log(`Números impares: ${sumaImpares}`);
//Ejercicio 2: Encontrar el número más grande en una matriz

let numeros = [23, 45, 67, 12, 89, 34, 65, 98, 22, 75]; // Puedes cambiar estos valores según tus necesidades
let maxNumero = numeros[0];

for (let i = 1; i < numeros.length; i++) {
  if (numeros[i] > maxNumero) {
    maxNumero = numeros[i];
  }
}

console.log(`El número más grande de la matriz es: ${maxNumero}`);







