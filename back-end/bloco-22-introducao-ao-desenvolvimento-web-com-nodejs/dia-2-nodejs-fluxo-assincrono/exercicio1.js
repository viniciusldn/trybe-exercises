const readline = require('readline-sync');

function checkType(...el) {
  // const check = (element) => isNaN(element);
  const isNum = [...el].some(element => isNaN(element));
  return isNum;
}

function main(a,b,c) {
  let param1 = a;
  let param2 = b;
  let param3 = c;
  if (!a,!b,!c) {
    param1 = readline.questionInt('Type a number\n', { limitMessage: 'Input is not a number'});
    param2 = readline.questionInt('Type a number to add\n', { limitMessage: 'Input is not a number'});
    param3 = readline.questionInt('Type a number to multiply\n', { limitMessage: 'Input is not a number'});
  }
  const result = ( (param1 + param2) * param3 );
  const promise = new Promise ((resolve, reject) => {
    if (result >= 50) resolve (`\nThe result is ${result}\n`);
    else if (checkType(a,b,c)){
      reject ('Input only numbers');
    };
    reject ('Result value is too low');
  })
  return promise;
}

module.exports = main;