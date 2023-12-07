// forloop break and continues

for (let index = 1; index <= 10; index++) {
    const element = index;
    //console.log(element)
}

// Break
// when we use breack in for loop It means we are searching for something specific and as soon as
// our condition is true we stop the loop

for(let i=1; i<=5; i++){
    if(i == 3){
        console.log("Yes, I got my value")
        break;
    }
    console.log(i)
}