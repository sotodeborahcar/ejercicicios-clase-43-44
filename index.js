// EJERCICIOS- ESTRUCTURAS DE CONTROL -BUCLES :

// 😀 piramide con while:

let fila = "";
let contador = 0;

console.log("EJERCICIO DE PIRAMIDE DE ESTRELLAS");
while (contador < 16) {
  fila += "⭐";
  contador++;
  for (let i = 0; i < 1; i++) {
    fila += "💜";
    contador++;
  }
  console.log(fila);
}

// 😀 obtenerIndice(valor, array)

// Crear una función obtenerIndice que tome como argumento un valor cualquiera valor y un array cualquiera array y devuelva el índice del primer ítem con dicho valor en el array, o -1 si no hay ninguno.

const obtenerIndice = (valor, array) => {
  return array.indexOf(valor, array);
  // .indexOf => retorna el primer indice en el que se puede encontrar un elemento dado en el array, o retorna "-1" si el elemento no esta presente
};

console.log("EJERCICIO DE OBTENER INDICE");
console.log(obtenerIndice(12, [5, 7, 12, 34, 54, 2, 12])); // 2
console.log(obtenerIndice(83, [5, 7, 12, 34, 54, 2, 12])); // -1
console.log(obtenerIndice(1, [9, 7, 11, 34, 11, 11, 1])); // 6

// 😀 repetir(valor, cantidad)

// Crear una función repetir que tome como argumento un valor y un número entero cantidad, y devuelva una array con valor repetido cantidad de veces.

// repetir('lovelace', 3) // ['lovelace', 'lovelace', 'lovelace']
// repetir('a', 5) // ['a', 'a', 'a', 'a', 'a']
// repetir('html', 0) // []

console.log("EJERCICIO DE REPETIR'");
const repetir = (str, num) => {
  const array = [];
  for (let i = 0; i < num; i++) {
    array.push(str);
  }
  return array;
};

console.log(repetir("lovelace", 3)); // ['lovelace', 'lovelace', 'lovelace']
console.log(repetir("a", 5)); // ['a', 'a', 'a', 'a', 'a']
console.log(repetir("html", 0)); // []

// 😀 sumarImparesHasta(numero)

// Crear una función sumarImparesHasta que tome como argumento un número numero y que devuelva la suma de todos los impares empezando desde 0 hasta dicho numero inclusive.

const sumarImparesHasta = (numero) => {
  // encontrar todos los numeros impares
  // sumarlas a todos entre si
  let acumuladora = 0; // se necesita definir afuera del for

  for (let i = 0; i <= numero; i++) {
    // console.log(i);
    // operador modulo resto "%"
    if (i % 2 !== 0)
      // impar != , sino par ===
      acumuladora += i;
  }
  return acumuladora;
};

console.log("EJERCCIO SUMAR IMPARES HASTA.."); // -1
console.log(sumarImparesHasta(5)); // 9 (1 + 3 + 5 = 9)
console.log(sumarImparesHasta(13)); // 49
console.log(sumarImparesHasta(47)); // 576

// for (let i = 0; i <= 10; i += 2) {
//   console.log(i);
// }

// otra forma =>

console.log("otra forma de resolver");

const sumarImpares = (num) => {
  let acumuladora2 = 0;
  for (let i = 1; i <= num; i += 2) {
    acumuladora2 += i;
  }
  return acumuladora2;
};

console.log(sumarImpares(5)); // 9 (1 + 3 + 5 = 9)
console.log(sumarImpares(13)); // 49
console.log(sumarImpares(47)); // 576

// 😀 crearCuentaRegresiva(numeroInicial)

// Crear una función crearCuentaRegresiva que tome como argumento un número entero numeroInicial y que devuelva un array con cuyo primer ítem sea numeroInicial y los demás ítems sean números enteros sucesivos descendientes, hasta llegar a 0.

console.log("EJERCICIO CREAR CUENTA REGRESIVA");

const crearCuentaRegresiva = (numeroInicial) => {
  let array = [];
  for (let i = numeroInicial; i >= 0; i--) {
    array.push(i);
  }
  return array;
};

// crearCuentaRegresiva(3);
// crearCuentaRegresiva(5);
console.log(crearCuentaRegresiva(3)); // [3, 2, 1, 0]
console.log(crearCuentaRegresiva(5)); // [5, 4, 3, 2, 1, 0]

// EJERCICIOS- CON BUCLE "FOR":

// ejercicio-extra :

// 1. dado el array =>

const nombres = ["ana", "maca", "angie", "caro", "pepo"];

// mostrar en consola los nombres empezando por el ultimo y terminando en el primero.

const nombresFinPrincipio = nombres.reverse();
console.log("EJERCICIO NOMBRES AL REVES");
console.log(nombresFinPrincipio);

// 🏃‍♀️ Carrera

// Crear un programa para controlar las vueltas de una deportista. Debe pedir al usuario la cantidad de vueltas que va a realizar e ir preguntando el tiempo en segundos de cada vuelta. Al final, se debe mostrar un mensaje listando los tiempos de cada vuelta y el promedio del tiempo de las vueltas (suma de las vueltas / cantidad de vueltas). Ejemplo:

// Cantidad de vueltas: 3
// Vuelta 1: 133s
// Vuelta 2: 145s
// Vuelta 3: 166s
// ⏱ Promedio: 144.45s

// let pedirCantidadDeVueltas = prompt(
//   "Ingresar la cantidad de vueltas que va a realizar"
// );

// const controlarVueltas = () => {
//   let inputCantidadVueltas = Number(pedirCantidadDeVueltas);
//   let lineaDeTexto = ``;
//   let sumaDuracionVueltas = 0;
//   let promedio = 0;
//   for (i = 0; i < inputCantidadVueltas; i++) {
//     let pedirDuracionDeVueltas = prompt(
//       `Ingrese el tiempo de cada vuelta (en segundos)`
//     );
//     let inputDuracionVueltas = Number(pedirDuracionDeVueltas);
//     //console.log(inputDuracionVueltas)
//     lineaDeTexto += `
//         Vuelta ${i + 1}: ${inputDuracionVueltas}s`;
//     //console.log(lineaDeTexto)
//     sumaDuracionVueltas += inputDuracionVueltas;
//     //console.log(sumaDuracionVueltas)
//     promedio += inputDuracionVueltas / inputCantidadVueltas;
//     //console.log(promedio)
//   }
//   const crearMensaje = alert(`
//     Cantidad de vueltas: ${inputCantidadVueltas}
//     ${lineaDeTexto}
//     ⏱ Promedio: ${promedio}s
//     `);
// };

// console.log(controlarVueltas());

// 🔐 Múltiples intentos

// Crear un programa que pida ingresar usuario y contraseña. El programa debe permitir hasta 3 intentos, cuando el usuario y/o la contraseña sean incorrectos. Si se ingresa correctamente ambos antes de 3 intentos erróneos, debe mostrar un mensaje de bienvenida. Si se ingresan 3 intentos erróneos, debe mostrar un mensaje de error y terminar el programa. El usuario y la contraseña ya deben estar guardadas en variables.
