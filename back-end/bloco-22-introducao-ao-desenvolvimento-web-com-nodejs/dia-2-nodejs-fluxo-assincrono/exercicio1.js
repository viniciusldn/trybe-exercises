const readline = require('readline-sync');

function main() {
  const param1 = readline.questionInt('Type a number\n');
  const param2 = readline.questionInt('Type a number to add\n');
  const param3 = readline.questionInt('Type a number to multiply\n');
  if (isNaN(param1)||isNaN(param2)||isNaN(param2)) throw new Error('Input is not a number')
  const result = ( (param1 + param2) * param3 );
  const promise = new Promise ((resolve, reject) => {
    if (result >= 50) resolve (`\nThe result is ${result}\n`)
    reject ('Result value is too low')
  })
  return promise;
}

main()
  .then((resolve) => console.log(resolve))
  .catch((reject) => console.log(reject));