const saludo = (nombre = "Debe ingresar un nombre") => {
  console.log(`Hola ${nombre}!`);
};

saludo("Vanessa");
saludo("Nicolas");
saludo();
