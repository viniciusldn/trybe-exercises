const { resolve } = require('path');

const fs = require('fs').promises;

fs.readFile('./simpsons.json', 'utf-8')
  .then((fileContent) => JSON.parse(fileContent))
  .then((simpsons) => listSimpsons(simpsons))

function listSimpsons(arr) {
  for (index = 0; index < arr.length; index += 1) {
    console.log(`${arr[index].id} - ${arr[index].name}`);
  }
}

async function searchId(id) {
  const simpsonsJSON = await fs.readFile('./simpsons.json', 'utf-8')
  return new Promise((resolve, reject) => {
    const simpsonsArr = JSON.parse(simpsonsJSON);
    const simpson = simpsonsArr.find((el) => Number(el.id) === Number(id));
    if (simpson) resolve (simpson);
    reject ('ID NOT FOUND');
    // Não consegui fazer funcionar com o for
    /* for (index = 0; index < simpsonsArr.length; index += 1) {
      if (simpsonsArr[index].id === id) resolve (simpsonsArr[index])
      reject ('ID NOT FOUND');
    } */
  })
}

searchId(10)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));