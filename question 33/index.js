// Q34) Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
//• Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
//• Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!
var favorite_pizza = ["Vegetarian Deluxe Pizza", "Ham & Mushroom Pizza", "Mexican Hot Pizza"];
console.log("\n*** favourite pizza***\n");
for (var pizza = 0; pizza < favorite_pizza.length; pizza++) {
    console.log(favorite_pizza[pizza]);
}
// modified for loop
console.log("\n*** Modified pizza list***\n");
for (var pizza = 0; pizza < favorite_pizza.length; pizza++) {
    console.log("I like ".concat(favorite_pizza[pizza], " pizza"));
}
console.log("\n***Comment about pizza like***\n");
console.log("My favorite pizza is a classic Margherita, with its perfect balance of tomato sauce, mozzarella cheese, and fresh basil leaves.\nOccasionally, I enjoy indulging in a meat lover's pizza, loaded with pepperoni, sausage, ham, and bacon, for a hearty and satisfying meal.\nFor a unique twist, I also love a vegetarian pizza topped with roasted vegetables");
