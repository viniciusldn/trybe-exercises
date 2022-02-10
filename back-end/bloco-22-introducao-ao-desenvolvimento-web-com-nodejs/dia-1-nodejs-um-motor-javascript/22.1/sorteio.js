const rls = require('readline-sync');

const handleInput = () => {
  const usrNumber = rls.questionInt('Escolha um numero entre 0 e 10:\n');
  const randomNumber = (Math.random()*10).toFixed(0);

  if (usrNumber === randomNumber) console.log('Parabéns, número correto!');
  else console.log(`Opa, não foi dessa vez. O número era ${randomNumber}`)
};

handleInput();

module.exports = handleInput;
