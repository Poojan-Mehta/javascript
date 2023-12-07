
// console.log(this)
// this will print empty object

function userInfo(){
    let section = "A"
    let userInfo = {
        name: "Poojan",
        email: "poojan@gmail.com",
        sectionInfo: function(){
            //console.log(`welcome ${this.name} your section is ${section}`)
            // can not use name variable directly we have to use this 
        }
    }

    userInfo.sectionInfo()
}

userInfo()

// Arrow functions
// when use {} we must need to use return
const mobileInfo = (brand) => {
    
    return `This is ${brand}`;
}

// console.log(mobileInfo("Iphone"))

// one liner arrow functions
const teamName = (team) => ( `This IPL team is ${team}`)
//console.log(teamName("CSK"))

const winnerInfo = (winnerInfo) => `Winner is ${winnerInfo}`
// console.log(winnerInfo("Gujrat titans"))