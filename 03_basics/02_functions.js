// function calculateCartPrice(num){
//     return num 
// }
// console.log(calculateCartPrice(2,3,4,7))
// to solve the above problem . 
// rest is used where we dont have idea about how many arguments will come in the function . 

function calculateCartPrice(...num){
    return num 
}

// console.log(calculateCartPrice(2,3,4,7))
// array pasing . 
const myArr = [2,4,6,23,873]
// console.log(calculateCartPrice(myArr))

function test(a,b, ...rest) {
  console.log(a);    // 1
  console.log(b);    // 2
  console.log(rest); // [3, 4, 5]
}

// test(1, 2, 3, 4, 5);
// Rest must always be last parameter

// object pass karna in function . 

const user = {
    username : "Hitesh", 
    price : 783
}
// the features which are extracting in the function if not avilable than it will give 
// its value as undefined . 
function getUser(inputuser){
    return `The name of the user is ${inputuser.username} and its price is ${inputuser.price} `
}

// console.log(getUser(user))
// we can directly pass an object . 
console.log(getUser({
    username : "Sudhanshu", 
    price : 823
}))

// Array in the Function . 

const newArr = [200,883,8272,1572]

function getSecondElement(arr){
    console.log(arr[1])
}
getSecondElement(newArr)