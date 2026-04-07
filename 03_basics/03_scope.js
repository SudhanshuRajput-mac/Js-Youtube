
if(true){
    let a = 62
    const b = 54
    var c = 592
}

// console.log(a)
// console.log(b)
// console.log(c)      // the problem with var is that it makes anything globle . 

let a = 623786

if(true){
    let a = 62
    const b = 54
}
// console.log(a)

function one(){
    const username = "Hitesh"

    function two(){
        console.log(username) ; 
        const website = "youtube"
    }

    two()
    console.log(website)
}

// one()

// using if
if(true){
    const username = "Hitesh"

    if(username === "Hitesh"){
        const web = " youtube"
        console.log(username + web)
    }

    // console.log(web)
}

// console.log(username) 

//  hoisting . 
// this type of function supports anywhere access . i.e before and after decleration of the function . 
// console.log(addOne(5))
function addOne(num){
    return num + 1 ; 
}

// console.log(addOne(5))

// addTwo(6) // Cannot access 'addTwo' before initialization -> this will give error . 
const addTwo = function(num){
        return num + 2 ; 
}
addTwo(6)
// console.log(addTwo(6))