/* 📌 setTimeout()

    - Sirve para ejecutar una función después de un tiempo determinado especificados en milisegundos.

    Ejemplo:

    const saludo = () => {
      console.log("Hola");
    };
    
    let id;
    const iniciar = () => {
      console.log("Iniciando contador");
      id = setTimeout(saludo, 5000);
    };
    
    const parar = () => {
      console.log("frenando contador");
      clearTimeout(id); // Esta funcion detiene el setTimeout
    };
*/

/* 📌 setInterval()

    - Sirve para ejecutar una función cada cierto tiempo especificado en milisegundos. 

    Ejemplo:

    let contador = 0;
    let id;
    
    const iniciar = () => {
      id = setInterval(() => {
        console.log(contador);
        contador++;
      }, 1000);
    };
    
    const parar = () => {
      console.log("Paramos la cuenta");
      clearInterval(id); // Esta funcion detiene el setInterval
    };
*/
