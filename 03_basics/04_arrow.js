const user = {
    username: "Hitesh" , 
    price : 999 , 

    welcomeMessage : function(){
        // console.log(`${username} welcome to website .`)
       // ReferenceError: username is not defined
        // console.log(`${username} welcome to website .`)
        // that is why we use this keyword . 
        console.log(`${this.username} welcome to website .`)
        console.log(this)
    }

}

// user.welcomeMessage()
// user.username = "sami"
// user.welcomeMessage()

// console.log(this)       // {}
//
//   window
// function test() {
//   console.log(this);
// }
// test();

// this will give -> undefined
// we can not use this inside the function . as same inside the object . 
// function chai() {
//     let username = "Hitesh"
//   console.log(this.username);
// }
// chai();
// another way of function decleration . 
// const chai = function(){
//     let username = "Hitesh"
//     console.log(this.username);
// }

// chai()

// Arrow function . 
// the output of this is -> {}
const chai = () =>{
    let username = "Hitesh"
    console.log(this);
}

// chai()
// arrow function define . 

// const addTwo = (num1 , num2) => {
//     return num1 + num2 ;
// }
// console.log(addTwo(4,7))

// implecity return . 
// const addTwo = (num1 , num2) => num1 + num2 

// console.log(addTwo(4,9))

// very used in react . 
// another way . 
const addTwo = (num1 , num2) => (num1 + num2)

console.log(addTwo(4,9))
// why parenthesis -> when we have to return object without the use of return keyword . 
// const used = () => {username : "Sudhanshu"}     // undefined

const used = () => ({username : "Sudhanshu"})
console.log(used())