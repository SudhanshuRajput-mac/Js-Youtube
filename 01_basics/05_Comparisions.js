console.log(2 > 3)
console.log(2 < 3)
console.log(2 == 3)
console.log(2 != 3)
console.log(2 >= 3)
console.log(2 <= 3)

console.log("2" > 1)
console.log("02" >= 1)
console.log("2" < 12)
console.log("2" == 2)  // only values are compare . 
console.log("2" === 2)  // both values as well as datatype are compared . 

console.log(null > 0)   // In comparison (>), JavaScript converts null → 0
console.log(null == 0)      //In loose equality (==), null only equals undefined
console.log(null >= 0)      // Again, comparison converts null → 0
console.log(null === 0)     // Strict equality → no conversion. // Types are different . 
// notes . 
/*
| Operation            | Behavior                       |
| -------------------- | ------------------------------ |
| `>`, `<`, `>=`, `<=` | Converts `null → 0`            |
| `==`                 | `null` only equals `undefined` |
| `===`                | No conversion at all           |

*/

console.log(undefined == 0)
console.log(undefined < 0)
console.log(undefined > 0)
console.log(undefined <= 0)
console.log(undefined >= 0)

// strict check / equality . (===)

console.log("2" == 2);
console.log("2" === 2);
