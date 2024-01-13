const number1_array = [1, 2, 3, 4, 5, 6, 7, 8, 9]

//foreach
//not return anything, that's why we get undefined
let foreachTry = number1_array.forEach((num) => num*2)
//console.log(foreachTry)

//map
//returns the updated value
let mapTry = number1_array.map((num) => num*2)
//console.log(mapTry)

//slice
//only print the mention keys and whatever comes between in new arrays
let sliceTry = number1_array.slice(1,5)
// console.log(number1_array)
// console.log(sliceTry)

//splice
//cut the element that comes between this mentioned keys in orignal arrays
//and bind in new arrays
//so basically we can say It will cut the elements and make a new array for them
let spliceTry = number1_array.splice(1,3)
// console.log(number1_array)
// console.log(spliceTry)