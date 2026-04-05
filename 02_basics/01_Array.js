// Array 

const myArr = [0,1,2,3,4,5]

console.log(myArr)
// console.log(myArr[3]);
const Heros = ["Shaktiman" , "naagraj"]

const myArr2 = new Array(1,2,3,4)
// console.log(myArr2)

// Array Methods . 

// myArr.push(8)
// myArr.push(9)
// console.log(myArr)
// myArr.pop() 
// console.log(myArr)

// myArr.unshift(9)    // used to add element at the start . 
// console.log(myArr)

// console.log(myArr)
// myArr.shift()   // it deletes the element at the start . 
// console.log(myArr)

// console.log(myArr.includes(9))      // gives result in boolean form . 
// console.log(myArr.indexOf(3))       // if element is present in the array the will give its index . 
// else give - 1 ; 

// join() -> it converts array into string . return the same array . 

// const newArr = myArr.join() 
// console.log(newArr)
// console.log(typeof newArr)

// Slice and Splice
console.log("A ", myArr)
const mynewArr1 = myArr.slice(1,4)
console.log(mynewArr1)
console.log("B " , myArr)

// Splice remove that portion from the original array . that slice donot do . 
const mynewArr2 = myArr.splice(1,3) 
console.log(mynewArr2)
console.log("C " , myArr)