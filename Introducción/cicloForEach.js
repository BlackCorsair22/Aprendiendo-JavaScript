const amigos = ["Brayan", "Revolth", "Guaron"];

/* 📌 .forEach()
    - Nos permite recorrer cada elemento del arreglo
    
    // amigos.forEach((amigo, index) => {
    //   console.log(`El amigo: ${amigo} tiene el index: ${index}`);
    // });
*/

/* 📌 .for in() 
  - Nos permite recorrer las propiedades de un objeto.
    Ejemplo: 

    const persona = {
      nombre: "Nicolas",
      edad: 22,
      correo: "correo@correo.com",
    };
    
    for (propiedad in persona) {
      persona[propiedad] = "";
    }
*/

/* 📌 .for of() 
  - Nos permite recorrer los valores de un objeto iterable
  podemos recorrer: arreglos, cadenas de texto, mapas etc...
  Ejemplo:
  
  const etiquetas = document.head.children;

  for (elemento of etiquetas) {
    console.log(elemento);
  }
*/
