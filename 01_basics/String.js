const name="Himansu"
const repoCount=50
console.log('hello my name is ${name} and my repoCount is {repoCount} ');

const gameName=new String("Himansu")
console.log(gameName[1]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));

console.log(gameName.indexOf('n'));

const gameNamee=new String("Paltasingh");
const newString=gameNamee.substring(0,4)
console.log(newString);
console.log(gameNamee.length)

const anotherNewStaring=gameNamee.slice(2,7)
console.log(anotherNewStaring)

const newStringOne= " Chintu "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://chatgpt.$@320com/"
console.log(url.replace('$@320','himansu'));
console.log(url.includes('Paltasingh'));
console.log(gameNamee.split('_'));
