

// Q31) No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
//• If the list is empty, print the message We need to find some users!

//• Remove all of the usernames from your array, and make sure the correct message is printed.


let personNames:string[]=["Admin","Ahmed","Ali","Atif","Akram","Daniyal Azhar","Hamza Khan","Daniyal Khalid","Hameed","Irshad"]



if(personNames.length===0){

    console.log('We need to find some users!')
}else{

    
personNames.forEach((personNames)=>{

    if(personNames==="Admin"){
        console.log(`Hello ${personNames}, would you like to see a status report?`)
    }else{
        console.log(`Hello ${personNames}, thank you for logging in again.`)

    }

})


}



personNames=[]

console.log('*** empty array***')

if(personNames.length===0){

    console.log('We need to find some users!')
}else{

    personNames.forEach((personName)=>{

    if(personName==="Admin"){
        console.log(`Hello ${personNames}, would you like to see a status report?`)
    }else{
        console.log(`Hello ${personNames}, thank you for logging in again.`)

    }

})


}
