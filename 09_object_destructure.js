// object destructure

const userdetails = {
    name: {
        firstName: "poojan",
        middleName: "Bharatbhai",
        surname: "Mehta"
    },
    age: 28,
    email: "poojan@gmail.com"    
}

const {name} = userdetails
console.log(`Users full name is: ${name.firstName} ${name.middleName} ${name.surname}`);