//Q 19,Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.

let countries:string[]=[
    "Pakistan",
    "india",
    "sirlanka",
    "london",
    "canda",
    "banglades",
    "afghtanistan"
    
    ]
    
    
    
    countries.forEach((country,index)=>{
    
        console.log(`${index+1}.${country}`)
    })