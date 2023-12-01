// stack and heap

let school = "Saraswati"

let school2 = school

// console.log(school)
// console.log(school2)

school2 = "Gurukul"
// console.log(school)
// console.log(school2)


// Heap
let studentOne = {
    fullName: "Poojan Mehta",
    email: "poojan@gmail.com",
    school: school
}

let studentOneInfo = studentOne

console.log(studentOne)
console.log(studentOneInfo)

studentOneInfo.email = "poojanmehta@gmail.com"
console.log("-------Changed Value--------")

console.log(studentOne)
console.log(studentOneInfo)

// when we assign object in another object
// It will not create a copy but It gives the referece of first Object
// so if we changed the value for any of the objects It applies same for all reference objects