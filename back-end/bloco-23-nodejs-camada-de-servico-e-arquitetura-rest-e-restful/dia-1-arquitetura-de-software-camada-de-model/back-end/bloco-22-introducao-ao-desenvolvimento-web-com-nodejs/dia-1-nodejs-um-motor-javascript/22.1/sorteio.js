const rls = require('readline-sync');

const usrNumber = rls.questionInt('Escolha um numero entre 0 e 10:\n')

const getRandomNumber = () => {
  return (Math.random()*10).toFixed(0);
};

const handleInput = (input) => {
  const randomNumber = getRandomNumber();
  if (input === randomNumber) console.log('Parabéns, número correto!');
  else console.log(`Opa, não foi dessa vez. O número era ${randomNumber}`)
};

handleInput(usrNumber);
