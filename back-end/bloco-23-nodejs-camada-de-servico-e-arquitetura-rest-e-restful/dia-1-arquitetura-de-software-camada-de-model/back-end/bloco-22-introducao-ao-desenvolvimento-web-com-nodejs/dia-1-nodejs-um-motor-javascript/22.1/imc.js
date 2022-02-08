const rls = require('readline-sync');

const PESO = rls.questionFloat('Qual seu peso em kilos?\n');
const ALTURA = rls.questionFloat('Qual sua altura em metros?\n');

const computeImc = (weight, height) => {
  const imc = (weight / Math.pow(height, 2).toFixed(2));
  console.log(`IMC: ${imc}`)
};

computeImc(PESO,ALTURA);
