/* 📌 Alert()

    - Sirve para mostrar un mensaje en una ventana emergente.

    Ejemplo: 

    alert('Hola Mundo!');
*/

/* 📌 Confirm()

    - Sirve para mostrar un mensaje en una ventana emergente con dos opciones: 
    Aceptar o Cancelar. Si escogemos Aceptar, La funcion devuelve true, si escogemos Cancelar devuelve false.

    Ejemplo:

    
    const mayorEdad = confirm("¿Estás seguro de que quieres continuar?");
    
    if (mayorEdad) {
      alert("Bienvenido!");
    } else {
      alert("No puedes continuar ya que eres menor de edad.");
    }
    
*/

/* 📌 prompt()

    - Sirve para mostrar un mensaje en una ventana emergente con un campo de texto para que el usuario pueda escribir algo. 
    - La funcion devuelve el texto introducido por el usuario.
    - Si el usuario pulsa Aceptar sin escribir nada, la funcion devuelve un string vacio.

    Ejemplo:
    
    const nombre = prompt("Introduce tu nombre");
    
    alert(`Bienvenido ${nombre}!`);
*/
