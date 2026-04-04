// String Declaration in javascript 

const name = "Sudhanshu"
const gameName = new String("Doga")

// console.log(name)
// console.log(gameName);

const valCount = 50 
// String Concatination . 
// console.log(name + valCount + " Singh")      // but this is bad practise .  
const age = 26
// using bactics  . -> better way to concatinate string . 

// console.log(`Hello my name is ${name} and my age is ${age} . `)

// console.log(name[3])
// console.log(gameName.__proto__)
// console.log(gameName.length)
// console.log(name.toUpperCase())
// console.log(name)
// console.log(name.charAt(5))
// console.log(name.indexOf('h'))

// Substring in js . 

const newname = name.substring(1,4)
// console.log(newname)

const anothername = name.substring(-3 , 3) 
// console.log(anothername)

const aname = name.slice(-9 , 4)
// console.log(aname) ; 

// Trim 
const newstring = "    hitesh   "
console.log(newstring)
console.log(newstring.trim())

// replace 

const url = "https://Hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20' , '-'))

console.log(url.includes('hitesh'))

// String to array based on some char . 
// split() 
const str = "this-is-sudhanshu"
console.log(str.split('-'))
const arrstr = str.split('-')
console.log(arrstr)