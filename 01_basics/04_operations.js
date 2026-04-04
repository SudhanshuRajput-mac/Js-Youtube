/* operations in javascript */

let value = 3 
let negvalue = -value 

// console.log(value);
// console.log(negvalue);

// console.log(typeof negvalue);
// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2%5);
// console.log(23/4);

let str1 = "Hello"
let str2 = " World"
let str3 = str1 + str2 

// console.log(str3)

// console.log("1" + 3)

// console.log("2" + "4")
// let s1 = "1"
// let s2 = 3 
// let s3 = s1 + s2
// console.log(s3)
// console.log(typeof s3)
// let s4 = s2 + s1
// console.log(s4)
// console.log(typeof s4)
// console.log("1" + 2 + 2);
// console.log(1 + 6 + "3");

// console.log(+true);
// console.log(true)
// console.log(+"")

let gameCounter = 100 
gameCounter++ ; 

console.log(gameCounter)

//study ->  prefix and postfix operator in javascript .
// postfix operator . 
let x1 = 3;
const y1 = x1++;
// x1 is 4; y1 is 3

let x3 = 3n;
const y3 = x3++;
// x3 is 4n; y3 is 3n
console.table([x1 , y1 , x3,y3])

// prefix operator . 
let x = 3;
const y = ++x;
// x is 4; y is 4

let x2 = 3n;
const y2 = ++x2;
// x2 is 4n; y2 is 4n
console.table([x , y , x2,y2])
