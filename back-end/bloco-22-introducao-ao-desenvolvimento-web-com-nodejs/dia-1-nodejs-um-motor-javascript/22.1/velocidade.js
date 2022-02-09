const rls = require('readline-sync');

const computeAvgSpeed = () => {
  const distance = rls.questionInt('Qual a distancia percorrida em metros?\n');
  const time = rls.questionInt('Quantos segundos se passaram?\n');
  const avgSpeed = (distance/time);

  console.log(`Velocidade media: ${avgSpeed} m/s`);
};

computeAvgSpeed();

module.exports = computeAvgSpeed;
