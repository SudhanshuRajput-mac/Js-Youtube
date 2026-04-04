// *************          NUMBERS IN JS              *********************
const score = 400 
// console.log(score); 

const Balance = new Number(100) 
// console.log(Balance);

// console.log(Balance.toString())
// console.log(typeof(Balance.toString()))     // string type . 
//console.log(Balance.toString().length)  // properties of string by typecasting it to string .

// console.log(Balance.toFixed(2))      // it will fixed the output to two decimal place . 

const OtherNumber = 123.4943 

console.log(OtherNumber.toPrecision(3))
const OtherNumber2 = 134123.4943 

console.log(OtherNumber2.toPrecision(3))

const kalu = 100000000
console.log(kalu.toLocaleString()) // us standard by defualts . 
console.log(kalu.toLocaleString('en-IN')) // for indian Standards  . 

// +++++++++++++++++++++++++++++++    MATHS       +++++++++++++++++++++++++++++++++

// console.log(Math) ;     // once go to console and the do this you we know all the methods and values .

console.log(Math.abs(-5))
console.log(Math.round(93.7272))
console.log(Math.ceil(4.1))
console.log(Math.ceil(4.0))
console.log(Math.ceil(4))
console.log(Math.ceil(4.5))
console.log(Math.ceil(4.7))

console.log(Math.floor(4.1))
console.log(Math.floor(4))
console.log(Math.floor(4.0))
console.log(Math.floor(4.67))

console.log(Math.sqrt(4))
console.log(Math.min(2,4,1,-12,27))
//  same for max 
// +++++++ very important  +++++ 
// Math.random() -> will always give a random value between 0 to 1 . 

console.log(Math.random())
console.log(Math.random()*10)

let value = Math.random() 
// let value = 0.999    // this is for checking . 
console.log(value) ; 
console.log(value*10) ; 
console.log(value*10 + 1) ; 
console.log(Math.floor(value*10) + 1) ; 

const min = 10  
const max = 20 

//**** this will always give a number in between min and max both included . 
console.log(Math.floor(Math.random()*(max - min + 1)) + min)  
