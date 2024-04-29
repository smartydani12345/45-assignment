// Q15) More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
//• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// Initial list of guests
var guests = ["Hameed", "Sohail", "Anus", "Hamza"];
// Function to add more guests
function addMoreGuests(newGuests) {
    // Add new guests at the end of the array
    guests = guests.concat(newGuests);
    console.log("More guests added!");
    console.log("Updated guest list:", guests);
}
// Example usage
var newGuests = ["Kareem", "Sumair", "Dawood", "Hameed", "Sohail", "Anus", "Hamza"];
addMoreGuests(newGuests);
