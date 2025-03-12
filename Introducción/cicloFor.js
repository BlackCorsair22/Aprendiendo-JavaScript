const nombres = [
  "Carlos",
  "Chisthian",
  "Christopher",
  "Estefania",
  "Erika",
  "Manuel",
  "Nicolas",
];

// nombres.forEach(nombre => {
//   console.log(nombre);
// });

/* 📌Ciclo For
  -Repite un bloque de código mientras se cumpla una condición.
  - Expresión 1: Se ejecuta una sola vez antes de comenzar a repetir el bloque de código.
  - Expresión 2: Una condicion, mientras se cumpla se ejecutara el bloque de código.
  - Expresión 3: Esta expresion se ejecuta siempre y despues de que se ejecute el bloque de código.
*/

for (let i = 0; i < nombres.length; i++) {
  console.log(nombres[i]);
}
