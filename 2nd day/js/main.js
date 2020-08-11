console.log(40)

//variables
const name = "roi"
let name2 = "ben ishai"
console.log(name + name2)

//operetors
//[> , < , == , ===(type) , !=,!==]
console.log(3 < 5) // will output true
console.log(3 > 5) // will output false
console.log(2 >= 2) // will output true
console.log(1 <= -1) // will output  false
console.log("this string" == "that string") // will output false


console.log(1 == "1")// prints true check value
console.log(1 === "1")// prints false check type

// math operetors 
console.log(27 + 15)
console.log(81 / 9)
console.log(3.14 * 10)
//can do the same with variables
const num1 = 17
const num2 = 3
console.log(num1 + num2) // will print 20
//use parentheses
console.log((3 + 5) * 2) // same as 8*2, which will print 16

//illegal
let num
console.log(3 + num) //will print NaN (Not a Number)

//Modulo
console.log(14 % 5) // will print 4
//The above outputs 4 because the number 5 can go into 14 twice, with 4 left over.
//This is particularly useful when we want to find even or odd numbers:
const x = 41223
console.log(x % 2 == 0)


//TRUTHY/FALSEY
//example of true
console.log(3 < 5) //truthy expretion

//example of false
23 == 22 //falsey expretion
"home" == "house"//falsey expretion
// falsey = [0,NaN,null, "", undefined ]

//LOGICAL OPERATORS
//[and == && , or = || , not = !]
console.log(true && false) //print false
console.log((3 < 2) || (1 > 0)) // prints true because the right side resolves to true, even though the left side resolves to false

console.log(("a" == "a") && (32 === "32")) // prints false because the right side resolves to false

console.log(!(10 > 5)) // prints false, because the 10 IS greater than 5 (true), but the ! flips the true to a false

console.log(3 != 5)
console.log(51 !== "52")


// using the or(||) operetor to assigning variables
let startPosition
let newPosition = (startPosition || 0) + 10

console.log(newPosition) //prints 10





