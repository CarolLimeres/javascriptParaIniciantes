//  aqui eu defini a função
function areaQuadrado(lado) {
  return lado * lado;
}

// aqui eu ativei a função
console.log(areaQuadrado(10));

function imc(peso, altura) {
  var imc = peso / (altura * altura);
  return imc;
}

console.log(imc(80, 1.8));

function corFavorita(cor) {
  if (cor === "azul") {
    return "Eu gosto do céu";
  } else if (cor === "verde") {
    return "eu gosto de mato";
  } else {
    return "eu não gosto de cores";
  }
}

// callback: é uma função que ocorre após algo que acontece, nesse exemplo depois do click aparece 'oi'
addEventListener("click", function () {
  console.log("Oi");
});

function imc(peso, altura) {
  const imc = peso / altura ** 2;
  console.log(imc);
}
imc(80, 1.8); // retorna o imc
console.log(imc(80, 1.8)); // retorna o imc e undefined

function terceiraIdade(idade) {
  if (typeof idade !== "number") {
    return "Por favor insira um número";
  } else if (idade >= 60) {
    return true;
  } else {
    return false;
  }
}

console.log(terceiraIdade("oi"));

var totalPaises = 193;
function faltaVisitar(paisesVisitados) {
  var falta = totalPaises - paisesVisitados;
  return "Falta visitar " + falta + " países";
}

console.log(totalPaises);

var profissao = "Designer";
function dados() {
  var nome = "André";
  var idade = 28;
  function outrosDados() {
    var endereco = "Rio de Janeiro";
    var idade = 29;
    return `${nome}, ${idade}, ${endereco}, ${profissao}`;
  }
  return outrosDados();
}
console.log(dados()); // Retorna 'André, 29, Rio de Janeiro, Designer'
// outrosDados(); // retorna um erro

imc(80, 1.8);

function imc(peso, altura) {
  const imc = peso / altura ** 2;
  console.log(imc);
}
