// Falsy values . 
// -> these are  assumed to be false . 

// 0 , -0 , BigInt 0n , false , "" , null , Nan , undefined 

// rest all are truthy values . 
// superising truthy values 
// -> "0" , 'false' , ' ' , [] , {} , function(){} -> empty function . 

// falseness of empty array . checking . 

// const userEmail = [] 

// if(userEmail.length){
//     console.log("Array is not empty")
// }
// else {
//     console.log("Array is empty")
// }

// empty  object . 

const emptyObject = {} 

if(Object.keys(emptyObject).length === 0){
    console.log("Empty Object")
}
else{
    console.log("Not Empty object") 
}