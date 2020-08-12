//ex 1
const names = ["roi", 'shir', 'david', 'shany']
const ages = [28, 26, 40, 43]

for (let i = 0; i < 4; i++) {
    console.log(`${names[i]} is ${ages[i]} years old`)
}

//ex 2
const nums = [4, 6, 9, 10, 15, 25, 55]
let sum = 0
for (let num of nums) {
    sum += num
}
console.log(sum)

//ex3
let avg = Math.floor(sum / nums.length)
console.log(avg)

//ex4
const numbers = []
let target = 1
while (numbers.length < 100) {
    numbers.push(target)
    target++
}
console.log(numbers.length)

//ex 5
for (num in numbers) {
    if (num % 2 == 1) {
        console.log(num)
    }
}

//ex6
let nums2 = [773, 414, 213, 374, 434, 700, 506, 495, 852, 585, 271, 198, 689, 248, 708,
    197, 96, 260, 921, 834, 258, 662, 501, 632, 715, 503, 538, 289, 596, 381, 817, 280
    , 968, 877, 431, 146, 491, 724, 83, 841, 174, 21, 460, 25, 785, 539, 291, 404, 903,
    278, 159, 229, 216, 683, 84, 87, 879, 406, 661, 537, 890, 394, 382, 477, 271, 373,
    82, 104, 709, 723, 333, 958, 95, 983, 732, 917, 324, 785, 754, 23, 659, 551, 408, 442,
    766, 242, 611, 846, 802, 866, 817, 848, 227, 349, 243, 837, 21, 954, 146, 11]
for (let a in nums2) {
    if (nums2[a] == 709) {
        console.log(a)
    }
}

//ex7
const namesEx7 = ["Ashley", "Donovan", "Lucas"]
const agesEx7 = [23, 47, 18]
const people = []

for (let index1 = 0; index1 < 3; index1++) {
    people.push({ name: namesEx7[index1], age: agesEx7[index1] })
}
console.log(people)

//ex8
for (let j in people) {
    console.log(`${people[j].name} is ${people[j].ages} years old`)
}

//ex9
const posts = [
    { id: 1, text: "Love this product" },
    { id: 2, text: "This is the worst. DON'T BUY!" },
    { id: 3, text: "So glad I found this. Bought four already!" }
]
for (let d in posts) {
    if (posts[d].id === 2) {
        posts.splice(posts[d], 1)
    }
}
console.log(posts)

//ex10
const posts1 = [
    {
        id: 1,
        text: "Love this product",
        comments: []
    },
    {
        id: 2,
        text: "This is the worst. DON'T BUY!",
        comments: [
            { id: 1, text: "Idiot has no idea" },
            { id: 2, text: "Fool!" },
            { id: 3, text: "I agree!" }
        ]
    },
    {
        id: 3,
        text: "So glad I found this. Bought four already!",
        comments: []
    }
]


let userNumber = prompt("pleas enter a number 1-3")
if (userNumber == 2) {
    for (let numComm in posts1) {
        if(posts1[numComm].comments.id ==3){
            comments.splice(posts1.comments[id],1)
        }
    }
}
console.log(posts1)