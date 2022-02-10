const abc = require('./exercicio1');

async function callAbc (a,b,c) {
  try {
    const result = await abc(a,b,c)
    console.log(result);
  }
  catch (err) { console.log(err) };
}

callAbc ('Math.floor(Math.random() * 100 + 1)', Math.floor(Math.random() * 100 + 1), Math.floor(Math.random() * 100 + 1))