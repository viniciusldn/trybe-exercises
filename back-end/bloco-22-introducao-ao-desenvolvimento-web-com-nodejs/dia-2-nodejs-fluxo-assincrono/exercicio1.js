const readline = require('readline-sync');

function checkType(...el) {
  // const check = (element) => isNaN(element);
  const isNum = [...el].some(element => isNaN(element));
  return isNum;
}

function main(a,b,c) {
  if (!a,!b,!c) {
    a = readline.questionInt('Type a number\n', { limitMessage: 'Input is not a number'});
    b = readline.questionInt('Type a number to add\n', { limitMessage: 'Input is not a number'});
    c = readline.questionInt('Type a number to multiply\n', { limitMessage: 'Input is not a number'});
  }
  const promise = new Promise ((resolve, reject) => {
    if (checkType(a,b,c)) reject ('Input only numbers');
    const result = ( (a + b) * c );
    if (result < 50) reject ('Result value is too low');
    resolve (`\nThe result is ${result}\n`);
  })
  return promise;
}

module.exports = main;