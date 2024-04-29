


// Q42) Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
var magicians = ["Hamoon","Umrooayar","Zakoota","Hamoon2"];
function show_magicians(magicians) {
    magicians.forEach(function (magicians) {
        console.log(magicians);
    });
}
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = " The Great " + magicians[i];
        console.log(magicians[i]);
    }
}
console.log("\nList of magicians before modification:\n");
show_magicians(magicians);
console.log("\nList of magicians when modification:\n");
make_great(magicians);
console.log("\nList of magicians after modification:\n");
show_magicians(magicians);