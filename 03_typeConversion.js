
// string to number
let age = "20"

let stringToNumber = Number(age)

//console.log(typeof stringToNumber)

// string to number Ex.2
let weight = "60kg"

let stringToNumber2 = Number(weight)

//console.log(typeof stringToNumber2 + ' ' + stringToNumber2)

// wrong string value string to number Ex.3
let gender = "Male"

let stringToNumber3 = Number(gender) 

//console.log(typeof stringToNumber3 + ' ' + stringToNumber3) // NAN not a number

// boolean to number
let height = true

let booleanToNumber = Number(height)

//console.log(typeof booleanToNumber + ' ' + booleanToNumber) // 1

// Boolean conversion

let isMarried = "Yes"
// console.log(Boolean(isMarried) + " " + typeof(Boolean(isMarried)))

// No = true
// Blank = false
// 1 = true, 0 = false
// can convert any strings into boolean and value will be true

// String conversion

let score = 500
let intToString = String(score)

// console.log(intToString + " " + typeof intToString)

// prefix and postfix learning link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment
// postfix
let x = 10
let y = x++

//console.log(x) // output 11
//console.log(y) // output 10

// prefix
let x2 = 10
let y2 = ++x2

console.log(x2)
console.log(y2)