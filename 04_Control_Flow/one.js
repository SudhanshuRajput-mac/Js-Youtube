// < , > , == , <= , >= , != , === 

// if(2 == "2"){
//     console.log("Sudhanshu Singh")
// }
// if(2 === "2"){
//     console.log("Sudhanshu Singh")
// }
// else{
//     console.log("Aditi Singh")
// }
// ===   -> this is used for strict checking it also check the type in extra with == . 

// const score = 200 ; 

// if(score > 130){
//     const power = "Fly"  ;
    
//     console.log(`User power : ${power}`)
// }
// console.log(`User power : ${power}`)

// const balance = 1000 ; 
// if(balance > 500) console.log("Test") , console.log("Test2" ) ; 
// but ti=his is not prefered in industry . 

// if(balance < 500){
//     console.log("LEss than 500")
// }
// else if(balance < 750){
//     console.log("Less than 750")
// }
// else if(balance < 850){
//      console.log("Less than 850")
// }
// else{
//      console.log("greater than 850")
// }

const isloggedIn = true 
const havedebit = false 

if(isloggedIn && havedebit){
    console.log("Allowed to go for shopping") 
}
else{
    console.log("Dont allowed") 
}