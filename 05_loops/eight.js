// Original array containing numbers
const arr = [2, 3, 4, 5, 6];

// Initial value of the accumulator.
// The reduction process will start with accumulator = 0.
const initialVal = 0;

// reduce() iterates through each element of the array
// accumulator stores the running result
// currentValue represents the current element being processed
//
// Iteration flow:
// accumulator = 0, currentValue = 2  => 0 + 2 = 2
// accumulator = 2, currentValue = 3  => 2 + 3 = 5
// accumulator = 5, currentValue = 4  => 5 + 4 = 9
// accumulator = 9, currentValue = 5  => 9 + 5 = 14
// accumulator = 14, currentValue = 6 => 14 + 6 = 20
//
// Final result returned by reduce() = 20
// const Sumwithinitialvalue = arr.reduce(
//     (accumulator, currentValue) => accumulator + currentValue,
//     initialVal
// );

const Sumwithinitialvalue = arr.reduce( function (acc , curr) {
    // console.log(`acc := ${acc}   currvalue := ${curr}`)
    return acc + curr ; 
} , 15) 
// here 15 or any value will be treated as the initial value of accumulater(acc) .

// Print the sum of all elements in the array
// console.log(Sumwithinitialvalue); // Output: 20

const ShoppingCart = [
    {
        course : "js course" ,
        price : 2999
    },
    {
        course : "py course" ,
        price : 999
    },
    {
        course : "php course" ,
        price : 299
    },
    {
        course : "ds course" ,
        price : 12999
    },
    {
        course : "full stack course" ,
        price : 5999
    },
]

const total = ShoppingCart.reduce(function(acc , item) {
    let curr = item.price 
    console.log(`acc := ${acc}   currvalue := ${curr}`)
    return acc + curr ; 
}, 0)
console.log(total) ; 