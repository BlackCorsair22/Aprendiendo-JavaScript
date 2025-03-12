/* 📌 switch

    -- Estructura --
        La estructura switch nos permite evaluar una expresión y compararla con diferentes casos. Si la expresión coincide con un caso, se ejecuta el bloque de código correspondiente. Si no coincide con ningún caso, se ejecuta el bloque de código del caso default.

        switch (expresion) {
        case valor1:
            // Bloque de código
            break;
        case valor2:
            // Bloque de código
            break;
        case valor3:
            // Bloque de código
            break;
        default:
            // Bloque de código
        }

*/

const usuario = {
  nombre: "Juan",
  edad: 17,
  email: "juan@correo.com",
  ticket: true,
  pais: "españa",
};

switch (usuario.pais) {
  case "mexico":
    console.log("Bienvenido mexicano");
    break;
  case "colombia":
    console.log("Bienvenido colombiano");
    break;
  case "chile":
    console.log("bienvenido chileno");
    break;
  default:
    console.log("No esta claro el pais del usuario");
    break;
}
