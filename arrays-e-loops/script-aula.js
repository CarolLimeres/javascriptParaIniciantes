// retorna o último item da array e remove ele
// var ultimoItem = videoGames.pop();

// p adicionar um item no final da array
// videoGames.push("3DS");

for (var numero = 1; numero <= 4; numero++) {
  console.log(numero);
}

var i = 0;
while (i <= 10) {
  console.log(i);
  i = i + 5;
}

var videoGames = ["Switch", "PS4", "XBOX", "3DS"];

for (var i = 0; i < videoGames.length; i++) {
  console.log(videoGames[i]);
  if (videoGames[i] === "PS4") {
    break;
  }
}

var frutas = ["Banana", "Pera", "Maçã", "Abacaxi", "Uva"];

// o "fruta" vira dinamicamente um valor da minha array
frutas.forEach(function (fruta, index) {
  frutas.pop();
  console.log(fruta, index, frutas);
});
