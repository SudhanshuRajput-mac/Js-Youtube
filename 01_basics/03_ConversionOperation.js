let score = "33" 

console.log(typeof score) ;
console.log(typeof(score));

//let value = number(score) // this will give error because number should be written like this . 
let value = Number(score) 

console.log(typeof value);

let score2 = "33abc"

let valueInscore = Number(score2) 

console.log(typeof valueInscore)

console.log(valueInscore)
let score3 = null // in case of null it value will be 0 . and in case of undefined its value will same as string that is NaN . 
                 // in case of boolean value like true -> its value is 1 . and for false it is 0 . 

let valueInscore3 = Number(score3) 

console.log(typeof valueInscore3)

console.log(valueInscore3)

// "33" => 33 
// "3343ds" => NaN 

let isloggedin = 1  

let booleanisloogedin = Boolean(isloggedin) // only give false for 0 and true for others .  
// false is also come when we convert empty string to boolean . 

console.log(typeof booleanisloogedin);
console.log(booleanisloogedin);

// 1 => true // 0 => false 
// "" -> false 
// "gdh" -> true . 

let somenumber = 53 

let stringnumber = String(somenumber) 

console.log(typeof stringnumber);
console.log(stringnumber);
