// for 

const array = [2,3,4,5] ; 
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     console.log(element) ; 
// }

// let element = 0 ; 
// for (let i = 4; i < 10 ; i++) {
//     element += i ; 
//     if(i == 6){
//         console.log("6 is the best number .") ; 
//     }
//     console.log(element) ; 
// }

// nested loops . 

// for(let i = 0; i <= 10; i++){
//     console.log(`outer loop ${i}`) ; 

//     for(let j = 0; j <= 10 ; j++){
//         console.log(`Inner Loop ${j}`) ; 
//     }
// }

let myArray = ["Wonder Women" , "Superman" , "Flash" , "Batman"]

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element) ; 
}

// break and continue . 

for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    if(i == 2){
        // break ;
        continue  
    }
    console.log(element)
}

for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    if(i == 2){
        break ;
    }
    console.log(element)
}