const simuladorInvestimento = (valor, taxaJuros = 0.1, meses = 12) => {
  let saldo = valor;

  console.log(`evolução do saldo mês a mês é:`);
  for (let mes = 1; mes <= meses; mes++) {
    saldo += saldo * taxaJuros;
    console.log(`Mês ${mes}: R$${saldo.toFixed(2)}`);
  }

  let lucro = saldo - valor;
  let lucroPercentual = (lucro / valor) * 100;

  console.log(
    `Sendo o valor final de R$${saldo.toFixed(2)} e lucro de R$${lucro.toFixed(
      2
    )}, um ganho de ${lucroPercentual.toFixed(1)}%`
  );
};

simuladorInvestimento(1352000);


//--------------------- versão otimizada
/*
const simuladorInvestimento = (valor, taxaJuros = 0.1, meses = 12) => {
  let saldo = valor;

  const formatar = (num) => `R$${num.toFixed(2)}`;

  console.log("Evolução do saldo mês a mês:");
  for (let mes = 1; mes <= meses; mes++) {
    saldo += saldo * taxaJuros;
    console.log(`Mês ${mes}: ${formatar(saldo)}`);
  }

  const lucro = saldo - valor;
  const ganhoPercentual = (lucro / valor) * 100;

  console.log(
    `Valor final: ${formatar(saldo)} | Lucro: ${formatar(lucro)} | Ganho: ${ganhoPercentual.toFixed(1)}%`
  );
};

simuladorInvestimento(1352000);

*/