// Q43) Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.



let Magicians:string[]=["Hamoon","Umrooayar","Zakoota","Hamoon2"]

function show_magicians(Magicians:string[]){

    Magicians.forEach((Magicians)=>{

        console.log(Magicians)
    })


}


function make_great(Magicians:string[]){

   
   
    for(let i=0;i<Magicians.length;i++){

        Magicians[i] =" The Great "+Magicians[i]

        
        


    }

    return Magicians

}


const newMagiciansarray=make_great([...Magicians])



console.log("\ncall the function with new return array\n")
show_magicians(newMagiciansarray)


console.log("\norginal array remanin unchanged\n")
show_magicians(Magicians)