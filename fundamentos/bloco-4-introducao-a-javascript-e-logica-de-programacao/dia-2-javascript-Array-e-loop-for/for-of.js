
let lucknumbers = [];
let mybet = [2 , 6 , 13 , 27, 60 ,38];
let correct = [];
let correctcount = 0;
for (let count = 0; count < 6; count += 1) {
  lucknumbers.push(Math.floor(Math.random()*60+1));
}
console.log(lucknumbers);

for (let i = 0; i < lucknumbers.length; i += 1) {
  if (lucknumbers.includes(mybet[i])) {
    correct.push(mybet[i]);
    correctcount += 1;
  }
}
if (correct.length > 0) {
  console.log("você acertou " + correctcount,": " + correct);
}  
else{
  console.log("Você não acertou nada");
}