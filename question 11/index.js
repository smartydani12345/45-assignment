//Q11,Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
var friendName = ["Jameel", "Kashif", "Akram", "Irshad"];
friendName.forEach(function (friendName) {
    console.log("Plan to go on a picnic on Sunday ".concat(friendName));
});
