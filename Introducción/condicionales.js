/* 📌 Condicionales 

    -- Estructura --
        Los condicionales son estructuras de control que nos permiten tomar decisiones en el código.

        if (true) {
        // Bloque de código que se ejecuta si la condición es verdadera.
        } else {
        // Bloque de código que se ejecuta si la condición es falsa.
        }
    
    // Ejemplo:
    
        const usuario = {
        nombre: "Juan",
        edad: 17,
        email: "juan@correo.com",
        ticket: true,
        };
        
        if (usuario.edad > 17) {
        console.log("El usuario es mayor de edad y puede entrar al concierto");
        } else {
        console.log("El usuario es menor de edad y no puede entrar al concierto");
        }

      -- Combinando operadores
  
    // Ejemplo2

        const usuario = {
          nombre: "Juan",
          edad: 17,
          email: "juan@correo.com",
          ticket: true,
        };

        if (usuario.edad >= 18 && usuario.ticket) {
          console.log("El usuario es mayor de edad y puede entrar al concierto");
        } else {
          console.log(
            "El usuario es menor de edad o no posee un ticket para entrar al concierto"
          );
        }

      --Anidando condicionales --

    // Ejemplo3

      const usuario = {
        nombre: "Juan",
        edad: 17,
        email: "juan@correo.com",
        ticket: true,
      };

      if (usuario.edad >= 18) {
        if (usuario.ticket) {
          console.log("El usuario es mayor de edad y puede entrar al concierto");
        } else {
          console.log(
            "El usuario es mayor de edad pero no posee un ticket para ingresar al concierto"
          );
        }
      } else {
        console.log("El usuario es menor de edad para ingresar al concierto");
      }
    // Ejemplo4 else if

      const usuario = {
          nombre: "Juan",
          edad: 17,
          email: "juan@correo.com",
          ticket: true,
          pais: "mexico",
        };
        
        if (usuario.pais === "chile") {
          console.log("Bienvenido compatriota");
        } else if (usuario.pais === "mexico") {
          console.log("El usuario es mexicano");
        } else if (usuario.pais === "colombiano") {
          console.log("El usuario es colombiano");
        }
*/
