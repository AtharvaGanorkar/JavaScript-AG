const name ="Atharva"
const repoCount = 2

console.log(name + repoCount + " Value");
// not a proper way // not recomendated

console.log(`Hello My name is ${name} and my repo count is ${repoCount}`);

const gameNew = new String('Atharva');

// console.log(gameNew[0]);

// console.log(gameNew.length);
// console.log(gameNew.toUpperCase());
// console.log(gameNew.charAt(3));
// console.log(gameNew.indexOf('t'));


const newString = gameNew.substring(0,4)
console.log(newString);

const anotherString = gameNew.slice(-7,4)
console.log(anotherString);

const newStringone = "   Atharva   "
console.log(newStringone);
console.log(newStringone.trim());

const newStringtwo = "https://hitesh.com/hitesh%20choudhary"
console.log(newStringtwo.replace('%20' ,'_'));

console.log(newStringtwo.includes('Ath'));

// console.log(gameNew.split('_'));

