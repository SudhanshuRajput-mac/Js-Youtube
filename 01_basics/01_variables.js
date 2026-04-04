const account_id = 1425667 // it can not be changed once decleared . 
let account_email = "manitA@google.com"
var account_password = "12345"
account_city = "Raipur"     // this is also valid but not prefered. 

let account_state 

account_email = "hcd@gmail.com"
account_password = "5362"
account_city = "Jaipur"

/*
Prefer not to use var because of issue in block scope and functional scope . 
there is no effect of semiclone(;) in javascript . 
*/
// account_id = 23  // not allowed . 
console.log(account_id);

console.table([account_id , account_email , account_password , account_city])
console.table([account_id , account_email , account_password , account_city , account_state])
