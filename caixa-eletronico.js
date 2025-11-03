//Simulador de Caixa Eletrônico

const simularSaque = (valorSaque, saldo) => {
  let notas = [50, 20, 10, 5];
  let valorTotal = valorSaque;
  let qtdNotas = [];
  let agora = new Date();
  let hora = agora.getHours();
  let minutos = agora.getMinutes();

  if (valorSaque % 5 === 0 && saldo >= valorSaque) {
    for (let cedula of notas) {
      let qtd = Math.floor(valorSaque / cedula);
      qtdNotas.push(qtd);
      valorSaque -= qtd * cedula;
    }
  } else {
    console.log("Valor inválido, tente outro");
  }
  console.log(`Saque de ${valorTotal} realizado com sucesso às ${hora}:${minutos}!
    |   Extrato   |
    ${qtdNotas[0]} notas de R$50
    ${qtdNotas[1]} notas de R$20
    ${qtdNotas[2]} notas de R$10
    ${qtdNotas[3]} notas de R$5`);
};

simularSaque(175, 1000);


//--------------------- versão otimizada
/*
const simularSaque = (valorSaque, saldo) => {
  if (valorSaque % 5 !== 0 || saldo < valorSaque) {
    console.log("Valor inválido ou saldo insuficiente. Tente outro valor.");
    return;
  }

  const notas = [50, 20, 10, 5];
  const qtdNotas = [];
  let restante = valorSaque;

  for (let cedula of notas) {
    const qtd = Math.floor(restante / cedula);
    qtdNotas.push(qtd);
    restante -= qtd * cedula;
  }

  const agora = new Date();
  const hora = String(agora.getHours()).padStart(2, '0');
  const minutos = String(agora.getMinutes()).padStart(2, '0');

  console.log(`Saque de R$${valorSaque} realizado com sucesso às ${hora}:${minutos}!`);
  console.log("|   Extrato   |");
  notas.forEach((cedula, i) => {
    if (qtdNotas[i] > 0) console.log(`${qtdNotas[i]} notas de R$${cedula}`);
  });
};

simularSaque(175, 1000);
*/