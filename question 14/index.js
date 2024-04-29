// Q14) Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
//• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
//• Print a second set of invitation messages, one for each person who is still in your list.
var guests_list = ["Jameel", "Kashif", "Akram", "Irshad"];
console.log("\n******Guest we invited******\n");
for (var _i = 0, guests_list_1 = guests_list; _i < guests_list_1.length; _i++) {
    var guestsname = guests_list_1[_i];
    console.log("".concat(guestsname, ", inviting them to dinner\n"));
}
console.log("\n*****Guest who can't make it ******\n");
console.log("".concat(guests_list[1], " can't make it\n"));
console.log("".concat(guests_list[2], " can't make it\n"));
guests_list[1] = "Nauman shahid";
guests_list[2] = "Yasir hussain";
var newGuestList = __spreadArray([], guests_list, true);
console.log("\n*****new Guest list******\n");
for (var _a = 0, newGuestList_1 = newGuestList; _a < newGuestList_1.length; _a++) {
    var guestsname = newGuestList_1[_a];
    console.log("".concat(guestsname, ", inviting them to dinner\n"));
}
