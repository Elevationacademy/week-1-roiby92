// ex1
const calcAge = function (x, y) {
    if (x - y == 28 || y - x == 28) {
        console.log('your age is 28')
    } else {
        console.log('your age is not 28')
    }
}

calcAge(29, 1)
calcAge(1, 29)
calcAge(1, 30)

//ex2
const calcAge2 = function (x, y) {
    let sum = x - y
    console.log(`You are either ${sum} or ${sum + 1}`)
}

calcAge2(2018, 2015)

//ex3
const isEven = function (num) {
    if (num % 2 == 0) {
        return true
    }
    return false
}
console.log(isEven(10))
console.log(isEven(9))

//ex4
const printOdd = function (arr) {
    for (let num of arr) {
        if (num % 2 != 0) {
            console.log(num)
        }
    }
}
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
printOdd(arr)

//ex5
const numExsist = function (arr, num) {
    for (let i of arr) {
        if (num == i) {
            return true
        }
        return false
    }
}
const arr2 = [1, 4, 7, 9, 11]
console.log(numExsist(arr2, 1))
console.log(numExsist(arr2, 20))


//ex6
const calculator = {
    add: function (x, y) {
        let sum = x + y
        return sum
    },
    subtract: function (x, y) {
        let sub = x - y
        return sub
    }
}
const result1 = calculator.add(20, 1)
const result2 = calculator.subtract(30, 9)

console.log(calculator.add(result1, result2)) //should print 42

//ex7
const turnToKing = function (name, money) {
    name = name.toUpperCase()
    money = increaseByNameLength(money, name)
    name = makeRegal(name)

    console.log(name + " has " + money + " gold coins")
}

const increaseByNameLength = function (money, name) {
    return money *= name.length
}

const makeRegal = function (name) {
    return `His Royal Highness, ${name}`
}


turnToKing("martin luther", 100) // should print "His Royal Highness, MARTIN LUTHER has 1300 gold coins"


//ex8
const splice = function (arr, startPoint, delAfterStart, ...add) {
    let newArr = []
    let delArr = []
    if (startPoint > arr.length) {
        startPoint = arr.length
    } else if (startPoint < 0) {
        startPoint += arr.length
    }
    if (delAfterStart ==undefined) {
        for (let i = 0; i < arr.length; i++) {
            if (i === startPoint) {
                newArr.push(arr[i])
            } else {
                delArr.push(arr[i])
            }
        }
        arr.length = 0
        for (let j in newArr) {
            arr[j] = newArr[j]
        }
    } else if (delAfterStart > 0 && add == undefined) {
        for (let i = 0; i < arr.length; i++) {
            if (i === startPoint) {
                delArr.push(arr[i])
                delAfterStart--
            } else {
                newArr.push(arr[i])
            }
        }
        arr.length = 0
        for (let j in newArr) {
            arr[j] = newArr[j]
        }
    } else if (delAfterStart > 0 && add != undefined) {
        for (let i = 0; i < arr.length; i++) {
            if (i === startPoint) {
                delArr = [arr[i]]
                newArr[i] = [...add]
                delAfterStart--
            } else {
                newArr.push(arr[i])
            }
        }
        arr.length = 0
        for (let j in newArr) {
            arr[j] = newArr[j]
        }
    } else if (delAfterStart === 0) {
        for (i = 0; i < arr.length; i++) {
            if (i === startPoint) {
                newArr = [...add, ...arr]
            }
        }
        arr.length = 0
        for (let j in newArr) {
            arr[j] = newArr[j]
        }
    }


    return arr
}


// remove 1 element
// let arrR = [1, 2, 3]
// splice(arrR, 0, 1);
// console.log(arrR); //should be [2,3]


// // add 1 element
// arrR = [1, 2, 3]
// splice(arrR, 0, 0, 0);
// console.log(arrR); //should be [0,1,2,3]


// add 2 elements
// arrR = [1, 2, 3]
// splice(arrR, 0, 0, -1, 0);
// console.log(arrR); //should be [-1,0,1,2,3]


// replace 1 element
// arrR = [1, 2, 3]
// splice(arrR, 1, 1, 55);
// console.log(arrR); //should be [1,55,3] 


// // delete all elements from index to end
arrR = [1, 2, 3, 4, 5]
splice(arrR, 1);
console.log(arrR); //should be [1] 


// // returns array of deleted elements
// arr = [1, 2, 3]
// let deleted = splice(arr, 1);
// console.log(deleted); //should be [2,3] 


// // returns an array of the deleted element (1 element)
// arr = [1, 2, 3]
// deleted = splice(arr, 1, 1);
// console.log(deleted); //should be [2] 


// // returns an empty array when no elements are deleted
// arr = [1, 2, 3]
// deleted = splice(arr, 1, 0, 5);
// console.log(deleted); //should be [] 

