//1
const maxCapacity = 14
let surfTime = true
let bestStudent
const purposeInLife

console.log(maxCapacity)
console.log(surfTime)
console.log(bestStudent)
console.log(purposeInLife)


//2
let myFullName = "Roi Ben Ishai"

 myFullName += " "+"live's in tel aviv"

console.log(myFullName)


//3
const password = "05011992"

const confirmPassword = "05011992"

if (password == confirmPassword && password === confirmPassword){
    console.log(true)
}else{
    console.log(false)
// }


//4
let number = 423
let number2 = 12

number *= number2

console.log(number)

let num = 802
let num2 = 2

num /= num2

console.log(num)

console.log((5+6)*3)



//5
console.log((5 > 2) && false) //falsey
console.log(!("knife" === "sword")) //truthy
console.log("") // falsey
console.log((31 % 5) == "1") //truthy
console.log("5th Avenue" != "5th Avenue")//falsey
console.log(52 !== "52") //truthy
console.log((undefined || null)) //falsey



//6
// let a = 3
// a = 4
// let c = 0
// let b = a
// b = 2
// a = b
// b = c
// c = a
// a = b
// // a=0 b=0 c=2

// console.log(a,b,c)
