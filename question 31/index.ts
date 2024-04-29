// Q32) Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
//• Make a list of five or more usernames called current_users.

//• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

//• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

//• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.


let currentusers:string[]=["Admin","Ahmed","Ali","Atif","Akram","Daniyal Azhar","Hamza Khan","Daniyal Khalid","Hameed","Irshad"]

let newusers:string[]=['Waseem Khan ','Sikandar','Ibrahim','Salman','Sohail']



let currentuserslower:string[]=currentusers.map(user=>user.toLowerCase())







for(let i=0;i<newusers.length;i++){

    let newuserlower=newusers[i].toLowerCase()

    if(currentuserslower.includes(newuserlower)){

        console.log(`The ${newuserlower} enter  a new username`)
    }else{
        console.log(`The ${newuserlower} is avalible`)

    }
   
   


}