
one() // This works everywhere in this file

function one(){
    console.log("First function")
}



// two() // It will not work because It stored in function
const two = function (){
    console.log("Second function")
}

two() // Can not call before the function

one() // This works everywhere in this file