let score = "123abc"
console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0
let isLoggedIn = "Himansu"
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1=> true ; 0 => false
// "" => false
// "Himansu" =>true

let somenumber = 33
let stringNumber = String(somenumber);
console.log(stringNumber);
console.log( typeof stringNumber);


const originalPrice = 100; // Replace 100 with your actual original price
const discountPercentage = 30;
const discountAmount = (discountPercentage / 100) * originalPrice;
const discountedPrice = originalPrice - discountAmount;

console.log(discountedPrice);
