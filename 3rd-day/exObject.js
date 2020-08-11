let car = {
    color: "Green",
    numWheels: 4,
    isFancy: false
}

let carSent = "the " + car.color + " car, has " + car.numWheels + " wheels"

if (car.isFancy) {
    carSent += " It is fancy"
} else {
    carSent += " It is not fancy"
}

console.log(carSent)


let myItems = {
    item: "car",
    toBeginning: true,
    items: ["pan", "bike", "nootbook"]
}

if (myItems.toBeginning) {
    myItems.items.unshift(myItems.item)
} else {
    myItems.items.push(myItems.item)
}

console.log(myItems.items)


const human = {
    name: "Goojibear",
    age: 0
}

// const babyNameKey = "name"
// const babyNameValue = "Goojibear"

// human[babyNameKey] = babyNameValue
human.name += " albany"
human['age']++
console.log(human)


const bag = {
    weight: 10,
    owner: "Larissa",
    items: [                   // an array with objects in it!
        { item: "Pen", count: 2 },
        { item: "Bottle", count: 1 },
        { item: "Book", count: 3 }
    ]
}
console.log(bag.items[2].count) // prints 3
bag.items // the whole items array://[{item: "Pen", count: 2}, {...}, {...}]
bag.items[2] // the item at index #2://{item: "Book", count: 3}//remember we access arrays with indexes!
bag.items[2].count // the count of the item at index #2


//reference type
let person = {
    firstName: "Dopple",
    lastName: "Ganger"
  }
  
  let p = person
  p.firstName= "Chappy"
  
  console.log(p)
  console.log(person)
/* 
JS now says "listen here buddy, arrays can become very long,
and I don't want to waste memory on the exact same data!"
So instead of creating new memory,
JS will just say "hey, I'll just associate between
nums and numbers - whatever you do to one I'll do to the other."
*/  

let p1 ={
    name: "roi",
    age: 28,
    city: "TLV"
}

let p2 = {
    name: "shir",
    age: 28,
    city: "TLV"
}

if(p1.age == p2.age){
    if(p1.city == p2.city){
        console.log(p1.name + ' want to date ' + p2.name)
    }else{
        console.log(p1.name + ' want to date ' + p2.name + ' but he culdnot')
    }
}else {
    console.log(p1.name +' and' + p2.name + ' are not in the same age, they canot go dating')
}


const myList = [
    {firsName : "roi", lastName: "ben ishai"},
    {firsName : "shir", lastName: "ben ishai"}
]
console.log(myList)

myList[0].firsName = "lolo"
myList.splice(1,1)
console.log(myList)



const secondList = [
    {firsName : "David", lastName: "ben ishai"},
    {firsName : "shany", lastName: "ben ishai"}
]

myList.splice(myList.length,0, ...secondList)
console.log(myList)


const library = {
    books: [
        {title: "never ending story", auther:"Michael Ende"},
        {title: "king of humos anf queen of bath", auther:"Ilan Hytner"},
    ]
}

myList.splice(myList.length,0,...library.books)


const reservations = {
    Bob: { claimed: false },
    Ted: { claimed: true }
  }
  
const name = prompt('Please enter the name for your reservation');

if (reservations[name]){
    alert(`Welcome  ${name}`)
}else if (reservations[name]){
    alert("Hmm, someone already claimed this reservation")
}else {
    alert("You have no reservation")
}


 {
    
}
  

