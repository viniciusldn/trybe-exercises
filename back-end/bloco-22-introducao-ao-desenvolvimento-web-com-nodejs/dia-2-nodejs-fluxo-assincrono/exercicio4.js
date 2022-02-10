const fs = require('fs').promises;

fs.readFile('./simpsons.json', 'utf-8')
  .then((fileContent) => JSON.parse(fileContent))
  .then((simpsons) => listSimpsons(simpsons))

function listSimpsons(p) {
  for (index = 0; index < p.length; index += 1) {
    console.log(`${p[index].id} - ${p[index].name}`);
  }
}