const colores = ["rojo", "verde", "azul"];

/* 📌 Metodos Para Arreglos 
    - Los arreglos en JavaScript tienen una serie de métodos que nos permiten manipularlos de diferentes maneras


/* 📌 .Length 
    - Devuelve la cantidad de elementos de un arreglo
    ejemplo:

    console.log(colores.length);    
*/

/* 📌 .toString() 
    - Devuelve una cadena de texto con los elementos del arreglo separados por comas
    -Sirve para mostrar en el navegador los elementos de un arreglo
    ejemplo: 

    document.body.innerHTML = colores.toString();
*/

/* 📌 .join() 
    - Devuelve una cadena de texto con los elementos del arreglo separados por el caracter que se le pase como argumento
    ejemplo: 

    document.body.innerHTML = colores.join(" - ");
*/

/* 📌 .sort() 
    - Ordena los elementos del arreglo alfabeticamente
    - Si se pasa una función como argumento, se ordena según el valor que devuelva la función
    ejemplo: 
        
    const letras = ["b", "c", "a", "f", "d"];

        console.log(letras.sort());

*/

/* 📌 .reverse() 
    - Invierte el orden de los elementos del arreglo
    ejemplo: 

    console.log(colores.reverse()); // azul, verde, rojo    
*/

/* 📌 .concat() 
    - Une dos o más arreglos en uno solo
    ejemplo: 

    const numeros = [1, 2, 3, 4, 5];
    const nuevosNumeros = numeros.concat([6, 7, 8, 9, 10]);
    console.log(nuevosNumeros);
*/

/* 📌 .push() 
    - Agrega uno o más elementos al final del arreglo
    ejemplo: 

    colores.push("negro"); // Agrega el elemento al final del arreglo
*/

/* 📌 .pop() 
    -Elimina el ultimo elemento al final del arreglo 
    ejemplo: 

    colores.pop(); // Elimina el elemento "Azul" del arreglo de colores

*/

/* 📌 .shift() 
    -Elimina el primer elemento de un arreglo y recorre los elementos

    const dias = [
      "lunes",
      "martes",
      "miercoles",
      "jueves",
      "viernes",
      "sabado",
      "domingo",
    ];

    console.log(dias.shift()); // Esto nos devuelve el elemento que eliminara y tambien puede ser guardado dentro de una variable
*/

/* 📌 .unshift() 
    -Agrega uno o mas elementos al principio del arreglo

    const dias = [
      "lunes",
      "martes",
      "miercoles",
      "jueves",
      "viernes",
      "sabado",
      "domingo",
    ];
    
    dias.unshift("Nicolas", "Vanessa");
*/

/* 📌 .splice() 

    Nos permite insertar elementos a un arreglo donde le especifiquemos.
    - 1er parametro: Posición donde queremos comenzar a insertar los elementos.
    - 2do parametro: Si queremos eliminar elementos del arreglo desde la posición indicada.
    - Resto de parametros - Los elementos a insertar.
    Ejemplo: 
    
    const amigos = ["Brayan", "Guaron", "Revolth", "Fune", "Cheivier"];

    amigos.splice(1, 2, "Vanessa", "Veronica");
    
    console.log(amigos) // Reemplaza a 'Guaron' y 'Revolth' e inserta 'Vanessa' y 'Veronica'
*/

/* 📌 .slice()
    Nos permite copiar una parte de un arreglo a otro.
    - 1er parametro Posición desde donde queremos copiar.
    - 2do parametro Hasta antes de que elemento copiar.

    const frutas = ["Fresa", "Manzana", "Platano", "Uva", "Piña", "Mango"];
    const frutasFav = frutas.slice(1, 5);
    console.log(frutasFav);
*/
