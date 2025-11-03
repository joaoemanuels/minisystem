const simuladorInvestimento = (valor, taxaJuros = 0.1, meses = 12) => {
  let saldo = valor;

  console.log(`evolução do saldo mês a mês é:`);
  for (mes = 1; mes <= meses; mes++) {
    saldo += saldo * taxaJuros;
    console.log(`Mês ${mes}: R$${saldo.toFixed(2)}`);
  }

  let lucro = saldo - valor;
  let lucroPercentual = ((saldo - valor) / valor) * 100;

  console.log(
    `Sendo o valor final de R$${saldo.toFixed(2)} e lucro de R$${lucro.toFixed(
      2
    )}, um ganho de ${lucroPercentual.toFixed(1)}%`
  );
};

simuladorInvestimento(1352000);
