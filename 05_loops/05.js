// for each loops in array . 
const coding = ["js" , "c++" ,"Python", "Rb" , "Swift" , "C#" , "C"]

// Callback function are those whose name is not written , 

coding.forEach( function (items) {
    // console.log(items) ; 
})
// Using array function . 

// coding.forEach((i) => {console.log(i)})

// method three . 
// only we have to give outside function refrence . 

function printme(items){
    console.log(items) ; 
}

// coding.forEach(printme)

// coding.forEach((item , index , arrays) => {
//     console.log(item , arrays , index)
// })

// database se jabbhi data ata hai in the form of array of object .
// here for each loop plays very important role . 

// example . 

const mycoding = [
    {
        language : "Javascript" , 
        languagefilename : "js"
    },
    {
        language : "Java" , 
        languagefilename : "java"
    },
    {
        language : "Python" , 
        languagefilename : "py"
    }
]

mycoding.forEach( (items) => {
    // console.log(items) ; // this will print the object . 
    console.log(items.language , " :=> " , items.languagefilename)      // we can access the items in the object . 
})