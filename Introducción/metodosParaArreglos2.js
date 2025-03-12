const nombres = [
  "Carlos",
  "Rafael",
  "Estefania",
  "Rodrigo",
  "Rafael",
  "Gema",
  "Diana",
  "Sara",
];

/* 📌 .indexOf() 
    -Sirve para obtener el index de un elemento.
    Si no hay ningun elemento que coincida retorna -1
    Ejemplo: 
    
    console.log(nombres.indexOf("Rafael")); // Devuelve el primer index de un array
*/

/* 📌 .lastIndexOf() 
  - Nos devuelve el ultimo index del elemento consultado
  Ejemplo: 
      
  console.log(nombres.lastIndexOf("Rafael")); // Devuelve el ultimo index de un array

*/

/* 📌 .forEach() 
  - Sirve para recorrer un arreglo ejecutando una funcion por cada elemento    
  Ejemplo: 

  nombres.forEach(nombre => {
    console.log(nombre);
  });

*/

/* 📌 .find() 
  - Permite recorrer un arreglo y devuelve el Primer elemento que retornamos
  Ejemplo: 

  const primerLetra = nombres.find(nombre => {
  if (nombre[0] === "E") {
    return nombre;
  }
  });

console.log(primerLetra);
*/

/* 📌 .map() 
  - Nos permite ejecutar una funcion por cada elemento y nos crea un arreglo nuevo con la misma cantidad de elementos del otro arreglo
  Ejemplo:

  const arregloNew = nombres.map(nombre => {
  return nombre.toUpperCase();
  });

  console.log(arregloNew);


*/

/* 📌 .filter()
  - Nos permite ejecutar una función por cada elemento
  y luego crear un arreglo en base a los resultados de esa función.
  Ejemplo: 

  const nuevoNombre = nombres.filter(nombre => {
  if (nombre.length > 5) {
    return nombre;
  }
  });

  console.log(nuevoNombre);
*/

/* 📌 .includes()
  -Nos permite saber si el arreglo contiene un elemento en especifico
  Ejemplo: 
  
  console.log(nombres.includes("Rafael"));
*/

/* 📌 .every() 
  -Nos permite ejecutar un condicional sobre cada elemento y nos devuleve true si TODOS los elementos cumplieron con la condicion 
  Ejemplo:

  const nombresValidos = nombres.every(nombre => {
  if (typeof nombre === "string") {
    return true;
  } else {
    return false;
  }
  });
*/

/* 📌 .some() 
  - Nos permite ejecutar un condicional sobre cada elemento y
    nos devuelve true si algun elemento cumplio la condición.
    Ejemplo:

    const nombresValidos = nombres.some(nombre => {
      if (typeof nombre === "string") {
        return true;
      } else {
        return false;
      }
    });

*/
