// Q15) More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
//• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

//• Add one new guest to the beginning of your array.

//• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.


// previ0us exercis code


// Define a type for the guests
type Guest = string;

// Initial list of guests
let guests: Guest[] = ["Hameed","Sohail","Anus","Hamza"];

// Function to add more guests
function addMoreGuests(newGuests: Guest[]) {
    // Add new guests at the end of the array
    guests = guests.concat(newGuests);
    console.log("More guests added!");
    console.log("Updated guest list:", guests);
}

// Example usage
const newGuests: Guest[] = ["Kareem", "Sumair", "Dawood","Hameed","Sohail","Anus","Hamza"];
addMoreGuests(newGuests);

