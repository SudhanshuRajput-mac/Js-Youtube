// const tinderUser = new Object()  // this is -> Singleton object . 
const tinderUser = {}       // this is non-Singleton object . 

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isloggedin = false

// console.log(tinderUser) 

const regularUser = {
    email : "sum@gmail.com", 
    fullname : {
        username : {
            firstname : "Sudhanshu" ,
            lastname : "Singh"
        }
    }
}
// nesting is possible in object . 
// console.log(regularUser)
// console.log(regularUser.fullname)
// console.log(regularUser.fullname.username)

const obj1 = {1 : "a" , 2 : "b"}
const obj2 = {3 : "c" , 4 : "d"}

// const obj3 = { obj1 , obj2}     // this will give object ke ander object . 
// console.log(obj3)

const obj3 = {...obj1 , ...obj2}    // this will give a object which contain all 
// the key value pairs in obj1 and obj2 . 
// console.log(obj3)

// const obj4 = Object.assign(obj1 , obj2)  // obj1 will also get modified . 
// console.log(obj4)
// console.log(obj1)

const obj4 = Object.assign({} , obj1 , obj2)
// console.log(obj4)
// console.log(obj1)

// *** STUDY . 
// database se jab data ata hai to wah array of object hota hai 

console.log(tinderUser)
// this will give array of all the key in tinderUser object . 
console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))     // this will give array of array . 

console.log(tinderUser.hasOwnProperty('islogged'))