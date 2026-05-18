const myObject = {
    js : "javascript" , 
    cpp : "c++" , 
    rb: "Ruby" , 
    swift : "Swift by Apple"
}

// for in loops . 
// for (const key in myObject) {
//    console.log(key  , " :- " ,  myObject[key]) ;  
    
// }

// the below style is not working for just like map in case of for of loop . 
for (const [key , value] in myObject) {
//    console.log(key  , " :- " ,  value) ;  
}

// for in loop for array . 

const programming = ["js" , "c++" , "Rb" , "Swift" , "C#" , "C"]
// here the key will give the index of the value in the array . 
for (const key in programming) {
    console.log(programming[key])
    
}

// we can not use for in loops in case of maps . 