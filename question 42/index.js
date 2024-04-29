// Q43) Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var Magicians = ["Hamoon", "Umrooayar", "Zakoota", "Hamoon2"];
function show_magicians(Magicians) {
    Magicians.forEach(function (Magicians) {
        console.log(Magicians);
    });
}
function make_great(Magicians) {
    for (var i = 0; i < Magicians.length; i++) {
        Magicians[i] = " The Great " + Magicians[i];
    }
    return Magicians;
}
var newMagiciansarray = make_great(__spreadArray([], Magicians, true));
console.log("\ncall the function with new return array\n");
show_magicians(newMagiciansarray);
console.log("\norginal array remanin unchanged\n");
show_magicians(Magicians);
