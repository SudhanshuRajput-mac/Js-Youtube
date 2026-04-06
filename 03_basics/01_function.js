// fuunction in js . 

function sayMyName(){
    console.log("H")
    console.log("I")
    console.log("T")
    console.log("E")
    console.log("S")
    console.log("H")
}

// sayMyName       // this is function reference . remember this . 
// sayMyName()      // this is execution of the function . 

// Addition of two number . 
// in javascript parameters does not required datatypes . 
// function sum(a , b){
//     let ans = a + b ;
//     console.log(ans) ; 
// }
// when we call a function than inside the paranthesis they are called arguments . 
sum(72 , 872)
// console.log(sum(5,6))

function sum(a , b){
    // let ans = a + b ;
    // return ans 

    return a + b ; 
}

const result = sum(3,5)
// console.log("result : " , result)
 
// function loginUserMessage(username){
//     if(username === undefined){
//         console.log("Please enter the username")
//         return ; 
//     }
//     else{
//         return `${username} logged in . `
//     }
// }

// loginUserMessage("Sudhanshu")   // this will not print any msg in the terminal . 
// console.log(loginUserMessage("Sudhanshu"))

// console.log(loginUserMessage(""))
// console.log(loginUserMessage()) // undefined logged in .
// if we want to takel the sitution where username is undefined . than we will give default 
// value to that parameter . 

function loginUserMessage(username = "Sam"){
        return `${username} logged in . `
}

console.log(loginUserMessage())
console.log(loginUserMessage("Hitesh"))     // overwrite the Sam . 