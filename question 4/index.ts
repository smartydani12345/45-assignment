//Q4) Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.

 
let userName: string = "\t\n Daniyal \t\n"; // This saves the name with whitespace

console.log(userName); // Shows the name with whitespace
console.log(userName.trim()); // Shows the name without whitespace