// arrays
let fruits = ["Apple", "Banana", "Orange", "Kiwi", "Dragon"];

// push add the new element in array
fruits.push("Grapes")
//console.log(fruits);

// pop will remove last value
fruits.pop()
//console.log(fruits)

// unshift will add new element at starting position
fruits.unshift("Grapes")
//console.log(`Grapes is added on firt position: ${fruits}`)

// shift remove first element
//fruits.shift()
//console.log(fruits)

// includes return boolean value 
//console.log(fruits.includes("Grapes"))

// indexof check value and in return get the index positions
//console.log(fruits.indexOf("Orange"))

// Array splice 
// first parameter is which position splice will start
// second parameter is for how many elements we want to delete

let a1 = [1,2,3,4,5,6,7,8,9]
a1.splice(2,3)

//console.log(a1)

// Array slice 
// how many elements we want to delete and It will start delete from first positions
let a2 = [1,2,3,4,5,6,7,8,9]
a2 = a2.slice(1)

// console.log(a2)

// concat
let a3 = ["poojan", "hardik"]
let a4 = ["harshit", "piyush"]
let a5 = ["juned", "suleman", "imtiyaz"]
let a6 = ["dhaval", "harsh", "darshak"]

let new_arr1 = a3.concat(a4, a5, a6)
// console.log(new_arr1)

// another way to merge the array
let merge_type2 = [...a3, ...a4, ...a6]
console.log(merge_type2)

