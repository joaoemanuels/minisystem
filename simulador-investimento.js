

const simuladorInvestimento = (valor) => {
  let valorInicial = 1000;
  let taxaJuros = 0.1;
  let valorFinal = 0;
  let prazo = 12;

  for (prazo = 0; prazo <= 12; prazo++) {
    valorFinal += valorInicial + valorInicial * taxaJuros;
  }
};
