// Dates 

let myDate = new Date()
// console.log(myDate)
// console.log(myDate.toString())      // this will give date in this formate : Sun Apr 05 2026 10:25:23 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString())      // this will only give date in this formate : Sun Apr 05 2026
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleDateString())    // this will give in formate : 4/5/2026
// console.log(myDate.toLocaleString())        // this will give in formate : 4/5/2026, 10:29:54 AM
// console.log(typeof myDate) // -> object . 

// let myCreatedDate = new Date(2026 , 0 , 5)  // in javascript months starts at 0 : i.e 0->jan and so on .
// let myCreatedDate = new Date(2026 , 0 , 10 , 3 , 53)   
// let myCreatedDate = new Date("2026-01-15")  // -> 01 -> means jan . 
let myCreatedDate = new Date("06/19/2025")  // mm/dd/yyyy
// console.log(myCreatedDate)
// console.log(myCreatedDate.toLocaleString())

// timestamp in js // used for quiz winner decision . 
let myTimestamp = Date.now() 
//   all will give time in milisecond . 
console.log(myTimestamp)    
console.log(Date.now())
console.log(myCreatedDate.getTime())
// conversion in seconds . 

console.log(Math.floor(Date.now()/1000))

let newDate = new Date() ; 
console.log(newDate) ; 
console.log(newDate.getDate())
console.log(newDate.getMonth())     // starts from 0 . 
console.log(newDate.getDay())        // sunday -> 0 ; and so on . 

console.log(newDate.toLocaleString('defualt' , {
    weekday : "long",
}))
