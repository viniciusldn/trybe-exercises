const PESO = 83;
const ALTURA = 1.79;

const computeImc = (weight, height) => {
  const imc = (weight / Math.pow(height, 2).toFixed(2));
  console.log(`IMC: ${imc}`)
};

computeImc(PESO,ALTURA);
