const rls = require('readline-sync');

const PESO = rls.questionFloat('Qual seu peso em kilos?\n');
const ALTURA = rls.questionFloat('Qual sua altura em metros?\n');

const computeImc = (weight, height) => {
  const imc = (weight / Math.pow(height, 2).toFixed(2));

  if (imc < 18.5) console.log(`IMC: ${imc} - Abaixo do peso (magreza)`);
  else if (imc >= 18.5 && imc < 25) console.log(`IMC: ${imc} - Peso normal`);
  else if (imc >= 25 && imc < 30) console.log(`IMC: ${imc} - Acima do peso (sobrepeso)`);
  else if (imc >= 30 && imc < 35) console.log(`IMC: ${imc} - Obesidade graus I`);
  else if (imc >= 35 && imc < 40) console.log(`IMC: ${imc} - Obesidade graus II`);
  else console.log(`IMC: ${imc} - Obesidade graus III e IV`);
};

computeImc(PESO,ALTURA);
