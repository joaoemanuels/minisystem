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


//--------------------- versão otimizada
/*
const calcNota = (...notas) => {
  const pesos = [3, 2, 2, 2];
  const bonusParticipacao = 2;
  const bonus = false;

  const somaPesos = pesos.reduce((acc, p) => acc + p, 0);
  const somaNotas = notas.reduce((acc, nota, i) => acc + nota * pesos[i], 0);

  let mediaFinal = somaNotas / somaPesos;

  if (bonus) {
    mediaFinal += bonusParticipacao;
  } else {
    console.log("Sem bônus de participação");
  }

  console.log(`A média final é ${Math.round(mediaFinal)}`);
};

calcNota(9, 3, 7.5, 6);
*/