const people_info = [
    {
        name: "guido",
        profession: "bungalow builder",
        age: 17,
        country: "canaland",
        city: "sydurn",
        catchphrase: "what a piece of wood!"
    },
    {
        name: "petra",
        profession: "jet plane mechanic",
        age: 31,
        country: "greenmark",
        city: "bostork",
        catchphrase: "that's my engine, bub"
    },
    {
        name: "damian",
        profession: "nursery assistant",
        age: 72,
        country: "zimbia",
        city: "bekyo",
        catchphrase: "with great responsibility comes great power"
    }
]

const p1 = {
    name: "damian",
    profession: "nursery assistant",
    age: 72,
    country: "zimbia",
    city: "bekyo",
    catchphrase: "with great responsibility comes great power"
}

const getSummary = function (person) {
    let summary = ""//modify the summary string with the person parameterreturn summary
    summary += capitalize(person.name) + ' '
    summary += `is ${getAge(person)} `
    summary += getProfession(person) + ', '
    summary += getAddress(person) + ' '
    summary += getCatchphrase(person)
    return summary
}


const capitalize = function (str) {
    let capitalizedStr = ""
    capitalizedStr += str[0].toUpperCase() //add the first letter of the str, capitalized
    capitalizedStr += str.slice(1) //add the rest of str normallyreturn capitalizedStr
    return capitalizedStr
}

const getProfession = function (person) {
    return person.profession

}

const getAddress = function (person) {
    let address = `From ${capitalize(person.city)} , ${capitalize(person.country)}`
    return address
}


const getAge = function (person) {
    let age = ""
    if (person.age < 21) {
        age += "an Underage"
        return age
    }
    else if (person.age > 55) {
        age += "55+"
        return age
    }
    return age += person.age + " years old"

}

const getCatchphrase = function (person) {
    return ` loves to say "${capitalize(person.catchphrase)}"`
}

for (let i in people_info) {
    console.log(getSummary(people_info[i]))
}


// console.log(getSummary(people_info[0]))
// console.log(getSummary(people_info[1]))
// console.log(getSummary(people_info[2]))


//____________________________________________________________________________________________________________//
const story = "In the beginning there was light. Then there were wolves. Finally there was a big fire. Ultimately, Shelob the wolf-master put out the fire with her feet. But until then, the fire caused one heck of a lot of damage."
const specialChars = [",", ".", "'", '"', "?", "!", ";"]
const wordCounts = {}

const storyLow = story.toLowerCase()

const delSpec = function (str) {
    let str1 = [...str]
    for (let i = 0; i < str1.length; i++) {
        for (let j in specialChars) {
            if (str1[i] ==   specialChars[j])
              str1.splice(str1[i], 1)
              //console.log(str1)
        }
    }
    console.log(str1.join(""))
    str = str1  
    return str
}


console.log(delSpec(storyLow))

