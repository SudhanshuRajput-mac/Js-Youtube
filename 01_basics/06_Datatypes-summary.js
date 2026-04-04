// Primitive 

// 7 types -> number , string , boolean , BigInt , null , Symbol, undefined . 

// both will come under the number datatype . 
const score = 100 
const scorevale = 103.526 ;

const islogged = true   // boolean . 

const name = "score" ;  // string 

let outtemp = null  // null type . 

let part;       // undefine . 

// symbol 

const id = Symbol('123')

const newId = Symbol('123')

console.log(id == newId);
console.log(id === newId) ;

const BigNumber = 9578431975n
console.log(typeof BigNumber)


// JavaScript is a dynamically typed language, but TypeScript is a statically typed language . 

// Reference(Non primitive) 

// Array , Objects , Functions . 
// datatype of all the non primitive is of object datatype . 


const Heroes = ["Shaktiman" , "Naagraj" , "Doga"]
console.log(typeof Heroes) 
console.log(Heroes)

let MyObject = {
    name : "Sudhanshu" , 
    Age : 26
}
console.log(typeof MyObject)
console.log(MyObject)
// typeof study link -> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof#typeof_null

/*

| Value Type    | Example                  | `typeof` Result | Why / Explanation                                                       |
| ------------- | ------------------------ | --------------- | ----------------------------------------------------------------------- |
|   Undefined   | `let x;`                 | `"undefined"`   | Variable declared but not assigned any value                            |
|   Null        | `let x = null;`          | `"object"` ⚠️   | Historical bug in JavaScript (null is primitive but returns `"object"`) |
|   Boolean     | `true`, `false`          | `"boolean"`     | Simple true/false values                                                |
|   Number      | `10`, `3.14`, `NaN`      | `"number"`      | Includes integers, floats, and even `NaN`                               |
|   BigInt      | `123n`                   | `"bigint"`      | Used for very large integers beyond Number limit                        |
|   String      | `"hello"`                | `"string"`      | Sequence of characters                                                  |
|   Symbol      | `Symbol()`               | `"symbol"`      | Unique and immutable identifiers                                        |
|   Function    | `function(){}`           | `"function"`    | Special type of object that is callable                                 |
|   Object      | `{}`, `[]`, `new Date()` | `"object"`      | All non-primitive structures except functions                           |

*/