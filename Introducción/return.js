const operacion = (tipo, numero1, numero2) => {
  let resultado;
  if (tipo === "suma") {
    resultado = numero1 + numero2;
  } else if (tipo === "resta") {
    resultado = numero1 + numero2;
  }
  return "Hola";
};

const operador = operacion("suma", 2, 3);
console.log(operador);
