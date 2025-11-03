const calcNota = (...nota) => {
  let peso = [3, 2, 2, 2];
  let somaPesos = 0;
  let bonusParticipacao = 2;
  let bonus = false;
  let media = 0;

  for (let i in nota) {
    somaPesos += peso[i];
    media += nota[i] * peso[i];
  }
  let mediaFinal = media / somaPesos;

  if (bonus) {
    mediaFinal += bonusParticipacao;
  } else {
    console.log("Sem bonus de participação");
  }
  console.log(`A media final é ${Math.round(mediaFinal)}`);
};

calcNota(9, 3, 7.5, 6);
