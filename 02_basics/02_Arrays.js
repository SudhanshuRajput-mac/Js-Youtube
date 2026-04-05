// Array 

const marvel_heroes = ["Thor" , "Ironman" , "Spiderman"]
const dc_heroes = ["Superman" , "Batman" , "Flash"]

// console.log(dc_heroes.length)   // to get the size / lenth of the array . 

// marvel_heroes.push(dc_heroes)

// console.log(marvel_heroes)      // this will give array ke ander array . 
// Array of javascript can tak any datatype element . 

// concat -> Combines two or more arrays.
// This method returns a new array without modifying any existing arrays.
// marvel_heroes.concat(dc_heroes)
// console.log(marvel_heroes.concat(dc_heroes))
// console.log(marvel_heroes)

// const newHeros = marvel_heroes.concat(dc_heroes)
// console.log(newHeros)
// console.log(marvel_heroes)
// console.log(dc_heroes)

// sprad operater . 
// const all_new_heros = [...dc_heroes , ...marvel_heroes]
// console.log(dc_heroes)
// console.log(marvel_heroes)
// console.log(all_new_heros)

// Flat -> Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
const another_arr = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_arr = another_arr.flat(2)  // if depth is not known -> in place of 2 write Infinity . 
// console.log(another_arr)
// console.log(real_another_arr)

// console.log(Array.isArray("Hitesh"))
// console.log(Array.from("Hitesh"))
// console.log(Array.isArray(Array.from("Hitesh")))

// console.log(Array.from({name : "Hitesh"}))  // interesting for interview . 

// console.log(Array.of({name : "He"}))
// let score1 = 100 
// let score2 = 200 
// let score3 = 300
// console.log(Array.of(score1 , score2 , score3))

// console.log(Array.isArray([]));
// console.log(Array.isArray({ length: 0 }));  // this will give false . 
// console.log(Array.isArray(new Array(5)));

// let result = Array.from({ length: 3 });
// console.log(result);
console.log(Array(3));
console.log(Array.of(3));
let str = "123";
let result = Array.from(str, Number);   // first converts string to number . then to array . 
console.log(result);

let arr = [1, 2, 3];

console.log(Array.from(arr) === arr);  // 👉 It creates a NEW array (shallow copy)
                                       // 👉 It does NOT return the same reference