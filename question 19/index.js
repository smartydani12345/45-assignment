//Q 19,Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
var countries = [
    "Pakistan",
    "india",
    "sirlanka",
    "london",
    "canda",
    "banglades",
    "afghtanistan"
];
countries.forEach(function (country, index) {
    console.log("".concat(index + 1, ".").concat(country));
});
