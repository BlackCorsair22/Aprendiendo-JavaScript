class Usuario {
  constructor(nombre, password) {
    this.nombre = nombre;
    this.password = password;
  }

  obtenerPost() {
    const posts = ["post1", "post2"];
    return posts;
  }
}

class Moderador extends Usuario {
  constructor(nombre, password, tipo) {
    super(nombre, password);
    this.tipo = tipo;
  }
  obtenerTipo() {
    if (this.tipo.includes("Borrar")) {
      console.log("El usuario si puede borrar");
    }
  }
}

const usuario1 = new Usuario("Nicolas", "1234");
const usuario2 = new Moderador("Vanessa", "4567", ["Borrar"]);

usuario2.obtenerTipo();
