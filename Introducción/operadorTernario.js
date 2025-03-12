/* 📌 Operador Ternario */

// if (boleto === "vip") {
//   codigoAcceso = "Boleto VIP";
// } else {
//   codigoAcceso = "Boleto General";
// }

//  Operador Ternario

const boleto = "vip";
const codigoAcceso = boleto === "vip" ? "boleto VIP" : "Boleto General";

console.log(codigoAcceso);
