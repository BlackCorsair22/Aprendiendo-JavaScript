/* 📌 Estructurade una clase:
    -Definicion
    -Propiedades: La clase puede contener variables. Dentro de una clase se llaman propiedades.
    -Constructor: Es un metodo especial para inicializar un objeto creado a partir de una clase.
    -Metodos: La clase puede contener funciones. Dentro de una clase se llaman metodos.

    Ejemplo: 

        class Usuario {
        tipo = "usuario";

        constructor(nombre, password) {
            this.nombre = nombre;
            this.password = password;
        }

        obtenerNombre() {
            console.log("obteniendo Datos");
            return `El nombre: ${this.nombre} tiene el password: ${this.password}`;
        }
        }

        const usuario1 = new Usuario("Nicolas", "1234");
        const usuario2 = new Usuario("Vanessa", "4321");

        const resultado = usuario1.obtenerNombre();

        console.log(resultado);
*/
