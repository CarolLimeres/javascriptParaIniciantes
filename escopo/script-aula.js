var carro = "Fusca";

function mostrarCarro() {
  var carro = "Fusca";
  console.log(carro);
}
mostrarCarro(); // Fusca no console
console.log(carro); // Erro, carro is not defined

if (true) {
  let mes = "Dezembro";
  console.log(mes);
}

// console.log(mes); // aqui da erro. Se tivesse criado com var ia vazar pra fora do escopo, por isso tem que usar let ou const

var i = 50;

// for (let i = 0; i < 10; i++) {
//   console.log(`Número ${i}`);
// }

console.log(i * 10);

const semana = "Sexta";
// senaba = "Quinta"
console.log(semana);

const data = {
  ano: 2018,
  mes: "Dezembro",
};

data.ano = 2019;
data.dia = 25;
