const rls = require('readline-sync');
const imc = require('./imc')
const velocidade = require('./velocidade')
const sorteio = require('./sorteio')


const handleInput = () => {
  const userChoice = rls.questionInt('Escolha uma opção:\n    1 - IMC\n    2 - Velocidade Média\n    3 - Acerte o Número');
  
  switch (userChoice) {
    case 1:
      imc();
    case 2:
      velocidade();
    case 3:
      sorteio();
    default:
      console.log('Opção invalida');
  }
}

handleInput();
