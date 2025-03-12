const frutas = ["Durazno", "Sandia", "Pera", "Manzana", "Platano"];
const frutasFav = ["Berries", "mango", ...frutas];

const datoslogin = {
  correo: "correo@correo.com",
  contraseña: "12345",
};

const usuario = {
  nombre: "Nicolas Figueroa",
  edad: 22,
  ocupacion: "Programador",
  gustos: ["comer", "jugar", "coger"],
  ...datoslogin,
};

const registroUsuario = (nombre, apellido, ...add) => {
  console.log(nombre, apellido, add);
};

registroUsuario("Nicolas", "Figueroa", "Me gusta programar", "Me gusta coger");

const { nombre, edad, gustos } = usuario;

const mostrarUsuario = ({ nombre, edad, ocupacion }) => {
  console.log(nombre, edad, ocupacion);
};

mostrarUsuario(usuario);
