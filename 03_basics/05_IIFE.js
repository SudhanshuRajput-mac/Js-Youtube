// Immediately Invoked Function Expression . (IIFE)

// function chai(){
        // named IIFE . 
//     console.log(`DB CONNECTED .`)
// }
// chai()

// immediately invoked 
(function chai(){
    console.log(`DB CONNECTED .`)
})();
// ; -> is for ending the iife . 
// () -> this is for where we write function . // () -> this is for executation call . 

//  this error is due to above one . 
//  (intermediate value)(...) is not a function
// ( () => {
//     console.log(`DB CONNECTED Two .`)
// })()

// OR 
// ( function aurcode(){
//     console.log(`DB CONNECTED Two .`)
// })()

( (username) => {
    console.log(`DB CONNECTED Two ${username}.`)
})("Sudhanshu")

// Note -> When two IIFE are written in the same file than the first IIFE must be terminated 
// with semicolen (;) . 