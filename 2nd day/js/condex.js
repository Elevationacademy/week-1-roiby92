//1
let numChildren = prompt("insert the number of children please")

let isCareful = prompt("are you careful (insert true/false)")

if (isCareful) {
    numChildren++
}
console.log(numChildren)

//2
let silverwareCount = prompt("insert a number please")

if (silverwareCount % 2 == 0) {
    console.log(silverwareCount + ' ' + "is odd number")
} else {
    console.log("somthing missing")
}

//3
let performance = "stellar"
let salary = 10000
const goodBonus = 1000
const stellarBonus = 3000


if (performance === "stellar") {
    salary += stellarBonus
} else if (performance === "good") {
    salary += goodBonus
} else {
    console.log("no bonus for you")
}
console.log(salary)

//4
const isVIP = false
let cash = 500

if (isVIP || cash > 300) {
    console.log("wellcome to our night club, have a nice time and domt drink and drive :)")
} else {
    console.log("sorry, you are not vip customer and you dont have cash, bettel luck next time")
}


//5
const a = 3
console.log(a)
let b = 2
console.log(b)
let c = 0 || 12
console.log(c)
let d
console.log(d)

b = c
console.log(b)
b++
console.log(b)
if (d) {
    b = a
}
console.log(b)

d = a + (b * c)
console.log(d)
d++
console.log(d)
b += 2
console.log(b)
console.log(a, b, c, d)

//6
const gender = prompt("pleaes enter your gendar ( male/female)")
let profession = "business"

if (gender == "male") {
    profession += "man"
}
else {
    profession += "woman"
}
console.log(profession)

//7
let boughtTesla = true
const yearOfTeslaPurchase = 2014
let isUSCitizen = true
let currentYear = 2018

if (boughtTesla && isUSCitizen) {
    if (currentYear - yearOfTeslaPurchase >= 4) {
        console.log("do you want to upgread your Tesla ?")
    } else {
        console.log("are you setisfied with the car?")
    }
} else if (boughtTesla && !isUSCitizen) {
    console.log("would you like move to US ?")
} else if (!boughtTesla) {
    console.log("Do you want improv your life style with tesla ?")
}
