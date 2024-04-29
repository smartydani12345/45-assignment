// Q37) Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function make_shirt(size, message) {
    console.log("The size of the T-shirt is ".concat(size, " and message should printed on T-Shirt is ").concat(message, "."));
}
function make_shirt_modified(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = ' I love TypeScript.'; }
    console.log("The size of the T-shirt is ".concat(size, " and message should printed on T-Shirt is ").concat(message, "."));
}
make_shirt_modified();
make_shirt_modified("medium");
make_shirt("medium", "Coding is life.");
