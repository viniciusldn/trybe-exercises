const abc = require('./exercicio1');

abc(Math.floor(Math.random() * 100 + 1), Math.floor(Math.random() * 100 + 1), Math.floor(Math.random() * 100 + 1))
  .then((resolve) => console.log(resolve))
  .catch((reject) => console.log(reject));