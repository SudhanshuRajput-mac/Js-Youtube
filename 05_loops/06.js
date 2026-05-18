const coding = ["js" , "c++" ,"Python", "Rb" , "Swift" , "C#"]

const values = coding.forEach( (item) => {
    // console.log(item) ; 
})
// checking the return value of the for each loop on the array . 
// console.log(values)

const values2 = coding.forEach( (item) => {
    // console.log(item) ; 
    return item ; 
})
// checking the return value of the for each loop on the array . 
// console.log(values2)

const myNums = [1,2,3,4,5,6 , 7,52]
// in case of array function without scope  return word is not written . 
// let newnums1 = myNums.filter( (num) => (return num > 3))
// corrected syntex. 
let newnums2 = myNums.filter( (num) => (num > 3))
// console.log(newnums2)

// in case of scope we have to write return key word . 
let newnums3 = myNums.filter( (num) => {
    return num >= 3
})
// console.log(newnums3)

// using foreach loops . 
const newarray = []
// console.log(newarray) 
myNums.forEach( (nums) => {
    if(nums > 3){
        newarray.push(nums) ; 
    }
})

// console.log(newarray) 

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

// const userbooks = books.filter( (values) => values.genre === 'History')
// other way . 
const userbooks = books.filter( (values) =>{
    if( values.genre === 'Science'){
        return values ; 
    }
})


// console.log(userbooks)

// give me books published after 2000 . 

// const userBook = books.filter( (items) => items.publish >= 2000 )

const userBook = books.filter( (items) => (items.publish >= 1995 && items.genre === 'History') )

console.log(userBook)