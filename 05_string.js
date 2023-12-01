let firstName = "Poojan"
let lastName = "Mehta"
let contact = "123456789"

// Should not use
//console.log("My name is: " + firstName + ", My contact detail is: "+contact)

// Use this modern patter
console.log(`My name is: ${firstName}, My contact detail is: ${contact}`)

let sentence = "Hello world, this is just a beginning";

// replace
let sentence_replace = sentence.replace("world","there")
//console.log(sentence_replace)

// trim
let fullName = "Poojan Mehta"

let mobileNo = "8866319747"

// can not remove whitespace between Poojan Mehta
console.log(fullName.trim())

// whitespace replace, fullName in lowercase and only took some part of mobile number
let userCode = fullName.replace(/\s+/g,'').toLowerCase() + mobileNo.substring(5,9)
console.log(userCode)

