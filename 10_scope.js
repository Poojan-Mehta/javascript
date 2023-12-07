let name = "poojan"
const age = 28

if(true){
    let name = "dhaval"
    const age = 35

    //console.log(`Name is ${name} AND age is ${age}`)    
}

// this takes first value of variable name and age
//console.log(`Name is ${name} AND age is ${age}`) 


function cityInfo(){
    let birth_city = "Junagadh"

    function workCity(){
        let work_city = "Ahmedabad"
        console.log(`Work city is: ${work_city}`)
    }
    
    console.log(`Birth city is: ${birth_city}`)
    workCity()
    // can not use work_city because It is out of scope
    //console.log(`Work city is: ${work_city}`)
}

cityInfo()