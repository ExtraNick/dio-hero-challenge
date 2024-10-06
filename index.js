

const exp = require('node:constants');
const readline = require('node:readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let rank = '';
let xp = 0;
let nome = '';
rl.question(`Nome do Heroi: `, name => {
  let nome = name
  console.log(`Hi ${name}!`);

rl.question(`XP do Heroi: `, experience => {
  let xp = Number(experience);
  console.log(`Hi ${experience}!`);
  rl.close();
// var nome = "";
// var xp = 0;

if(xp < 1000 ){
  rank = 'Ferro';
}
else if(xp >= 1001 && xp <= 2000){
  rank = "Bronze"
}
else if(xp >= 2001 && xp <= 5000){
  rank = "Prata"
}
else if(xp >= 5001 && xp <= 7000){
  rank = "Ouro"
}
else if(xp >= 7001 && xp <= 8000){
  rank = "Platina"
}
else if(xp >= 8001 && xp <= 9000){
  rank = "Ascendente"
}
else if(xp >= 9001 && xp <= 10000){
  rank = "Imortal"
}
else if(xp >= 10001){
  rank = "Radiante"
}
console.log(`O Herói de nome `+ nome + ` está no nível de ` + rank);
  });
});