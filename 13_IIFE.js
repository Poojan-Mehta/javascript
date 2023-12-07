// IIFE Immedietly invoked function expression

function one(){
    console.log("This functions needs to call")
}

one();

//IIFE
(() => {
    console.log("Automatic call")
})()
