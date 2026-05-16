// for of loops . 

const arr = [1,2,3,4,5]
for (const element of arr) {
    // console.log(element) ; 
}
let arr2 = ["sudhanshu" , "singh" , "Situ" , "Shipra" , "Aditi" , "Shakshi"]
// for (const element of arr2) {
//     console.log(element.length) ; 
// }

const greetings = "Hello World" ; 

for(const ele of greetings){
    // console.log(ele) ; 
}

// maps in js ; 

// duplicated values does not affet the map . 
const map = new Map() ; 

map.set("IN" , "India")

map.set("USA" , "United States of America")
map.set("Fr" , "France")
map.set("IN" , "India")
// map.set("IN" , "India")
// console.log(map)

for(const key of map){
    // console.log(key) ; 
}

for(const [key , value] of map){
    // console.log(key , " :- " , value) ; 
}

