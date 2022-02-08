const rls = require('readline-sync');

const DISTANCIA = rls.questionInt('Qual a distancia percorrida em metros?\n');
const TEMPO = rls.questionInt('Quantos segundos se passaram?\n');

const computeAvgSpeed = (distance, time) => {
  const avgSpeed = (distance/time);
  console.log(`Velocidade media: ${avgSpeed} m/s`);
};

computeAvgSpeed(DISTANCIA, TEMPO);
