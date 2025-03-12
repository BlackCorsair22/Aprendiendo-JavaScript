const promesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    const exito = false;

    if (exito) {
      resolve("La operacion tuvo exito");
    } else {
      reject("La operacion fallo");
    }
  }, 4000);
});

promesa.then(mensaje => {
  console.log(mensaje);
});

promesa.catch(mensaje => {
  console.log(mensaje);
});
