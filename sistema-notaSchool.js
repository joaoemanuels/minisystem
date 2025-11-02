const calcNota = (...nota) => {
  let peso = [3, 2, 3, 2];
  let somaNotas = [];
  let bonusParticipacao = 2;
  let bonus = true;
  let media = 0;

  for (let i in nota) {
    let soma = { nota: nota[i], peso: peso[i] };
    media += nota[i] * peso[i];
    somaNotas.push(soma);
  }
  let mediaFinal = media / nota.length;

  if (bonus) {
    mediaFinal += bonusParticipacao;
  } else {
    console.log("Sem bonus de participação");
  }
  console.log(`A media final é ${Math.round(mediaFinal / nota.length)}`);
};

calcNota(7, 7, 7, 7);
