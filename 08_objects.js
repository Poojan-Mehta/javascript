// object

const personal_details = {
    id: "123456",
    name: "Poojan mehta",
    email: "poojanmehta@gmail.com",
    age: 28,
    height: "160cm",
    city: "junagadh"
}

console.log(personal_details)

personal_details["email"] = "poojanmehta008@gmail.com"
console.log(personal_details)


// freeze can stop the modification of the object

// Object.freeze(personal_details)

// Adding the 'contact' key
personal_details.contact = "8866319747";
//console.log(personal_details)

personal_details.technologies = function (){
    let projects = ["javascript", "node", "react"];
    //console.log(projects);
}

const username = "abc@123"
//username = "abc"

//console.log(username)

// console.log(personal_details.technologies())


// IMP const for object and const for variable

// You are not changing the reference to personal_details; 
// instead, you are modifying the value associated with the email key within the object. 
// This is allowed in JavaScript, even if the object itself is declared with const.


// combine objects

const obj1 = {1:"a", 2: "b", 3: "c"}
const obj2 = {4:"d", 5: "e", 6: "f"}
const obj3 = {7:"g", 8: "h", 9: "i"}

const combine_obj = Object.assign({},obj1,obj2,obj3)
//console.log(combine_obj)

// key must be different otherwise it will overright and do not repeat

// should use this below method
const combine_obj2 = {...obj1, ...obj2, ...obj3}
console.log(combine_obj2)