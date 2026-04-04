// Stack memory -> primitive datatype . 
// Heap Memory -> non-Primitive datatype . 

let myYoutubeName = "Sudhanshu.com" 

let anotherName = myYoutubeName 
console.log(myYoutubeName)
console.log(anotherName)
console.log("/b")
anotherName = "ChaiAurCode" 

console.log(myYoutubeName) 
console.log(anotherName)

// heap 

let UserOne = {
    useremail : "dsa@gmail.com" , 
    upiId : "user@ybl"
}

let UserTwo = UserOne
console.log(UserOne)
console.log(UserTwo)

// to access the element of object dot is use . 
UserTwo.upiId = "Done@ybl"
// UserTwo.useremail = "hello@gmail.com"

console.log(UserOne)
console.log(UserTwo)