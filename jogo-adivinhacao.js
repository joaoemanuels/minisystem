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



//--------------------- versão otimizada
/*
const jogoAdivinhacao = (numeros, max = 50) => {
  const numAleatorio = Math.floor(Math.random() * max) + 1;
  
  for (let i = 0; i < numeros.length; i++) {
    const numeroEscolhido = numeros[i];

    if (numeroEscolhido === numAleatorio) {
      console.log(`Parabéns, acertou! O número era ${numAleatorio}`);
      return;
    }

    const dica = numeroEscolhido > numAleatorio ? 'maior' : 'menor';
    console.log(`Quase! O número correto é ${dica} que ${numeroEscolhido}`);

    if (i === numeros.length - 1) {
      console.log(`Você usou todas as tentativas. O número correto era ${numAleatorio}`);
    }
  }
};

jogoAdivinhacao([10, 20, 30, 40]);

*/