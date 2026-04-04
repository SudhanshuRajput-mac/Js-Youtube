"use strict"; // treats all the js code as newer version of js . 

// alert(3+3)  // this will not execute in the node . will execute / show pop up in the browser . 

console.log(3       // code readability that should be high . this is wrong practise .  
    + 3)

console.log("Sudhanshu");

let name = "sudhanshu"
let age = 17
let isjs = true 
let state ; 
let temp = null ; 
console.table([name , age , isjs , state , temp])


// datatype in js . 

// number => rage 2 to power 53 . 
// bigInt 
// string -> " " // ' '  // both are valid . 
// boolean -> true / false . 
// null -> standalone value . // it is a representation for a empty value . 
// undefined -> when no  value is assined to any variables . 
// symbol -> uniqueness . 


// object 

console.table([typeof age , typeof null , typeof name , typeof undefined])
// take a look at the type of null and undefined . 
// the type of null is object . whereas the type of undefined is undefined . 