const myNums = [1,2,3,4,5,6,7,8,9] 

// const newNums = myNums.map( (nums) => nums + 10) 
// console.log(newNums) ; 

// Chaning 
// const newNums = myNums.map((num) => num*10).map( (p) => p + 9)
const newNums = myNums.map((num) => num*10).filter( (p) => p >= 35)
console.log(newNums)