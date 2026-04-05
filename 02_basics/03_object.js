// Singleton -> constructor se banega tho singleton hoga . 
// constructor method
// Object.create() ; 


// Object Literals 
// store element in the form of key value pair . 
// always note that the key is stored inside as string . 
const JsUser = {
    name : "Sudhanshu",
    "Full Name" : "Sudhanshu Singh" , 
    age : 15,
    location : "Bhopal",
    email : "Sudhanhsu@google.com",
    isloggedIn : false ,
    lastLogingDay : ["Monday" , "Sunday"]
}

// accessing the element of the object 
// console.log(JsUser.email)   // but this way is not preffered . 
// console.log(JsUser[email])  // this will give error as behind the object key is stored as string .
// console.log(JsUser["email"])

// console.log(JsUser["Full Name"])     // we cannot access it by the use of dot . 
//***Task ->  create a symbol and  make it as key in the object 

const mysym = Symbol("Key1")

const JsUser2 = {
    name : "Sudhanshu",
    "Full Name" : "Sudhanshu Singh" , 
    // mysym : "Hitesh",       // this is not correct way // here mysym will be of string type . 
    [mysym] : "Hitesh" ,    // here key will be of symbol type . 
    age : 15,
    location : "Bhopal",
    email : "Sudhanhsu@google.com",
    isloggedIn : false ,
    lastLogingDay : ["Monday" , "Sunday"]
}

// console.log(JsUser2[mysym])

// changing the value of the key . 
JsUser2["email"] = "Hitesh@chatgpt.com"
// console.log(JsUser2) ; 

// Freeze the object . 

Object.freeze(JsUser2)
// after this no changes will be reflect in the object . 
JsUser2["email"] = "Hitesh@microsoft.com"
// console.log(JsUser2) ; 

JsUser.greeting = function(){
    console.log("Hello JS User");
}
// same object ke keys ko access karna hai to this keyword ka use karte hai . 
JsUser.greetingTwo = function(){
    console.log(`Hello JS User , ${this["Full Name"]}`)
}
// console.log(JsUser.greeting)     // this will give -> [Function (anonymous)]
console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())