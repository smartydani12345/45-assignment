//Q 13: Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
var guestName = ["Jameel", "Kashif", "Akram", "Irshad"];
guestName.forEach(function (guestName) {
    console.log("I would  like to join to dinnerwith me ".concat(guestName, "."));
});
