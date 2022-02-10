const rls = require('readline-sync')

const handleInput = () => {
  const userChoice = rls.questionInt('Escolha uma opção:\n    1 - IMC\n    2 - Velocidade Média\n    3 - Acerte o Número\n\n    ');

  if (userChoice === 1) {
    require('./imc');
  }
  else if (userChoice === 2) {
    require('./velocidade');
  }
  else if (userChoice === 3) {
    require('./sorteio');
  }
  else console.log('Opção invalida');
}

handleInput();
