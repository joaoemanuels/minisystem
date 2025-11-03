const jogoAdivinhacao = (...numero) => {
  let numAleatorio = Math.floor(Math.random() * 50);
  let tentativas = 0;

  for (let num in numero) {
    let numeroEscolhido = numero[num];
    tentativas++;
    if (numAleatorio == numeroEscolhido) {
      console.log(`Parabéns, acertou, ${numAleatorio}`);
      return;
    } else if (numAleatorio < numeroEscolhido) {
      console.log(`Quase, o número é menor que ${numeroEscolhido}`);
    } else if (tentativas == 4) {
      console.log(`Já usou todas as tentativas, sendo ${tentativas} escolhas`);
      break;
    } else {
      console.log(`Quase, o número é maior que ${numeroEscolhido}`);
    }
  }
  console.log(`O numero correto era o ${numAleatorio}`);
};
jogoAdivinhacao(10, 20, 30, 40);
