const obtenerPost = (usuario, callback) => {
  console.log(`Obteniendo los datos del usuario: ${usuario}`);
  let post = ["Post1", "Post2", "Post3"];
  callback(post);
};

obtenerPost("Nicolas,", post => {
  console.log(post);
});
