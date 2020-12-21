//here is our array of aphorisms
let aphorisms = ["call vs response", 
"warmth vs coldness",
"emotions",
"Poetic Systems Fall 2020",
"shots/grabs",
"sentiments a decade old",
"Suspend/Collapse",
"human randomness",
"hidden poems",
"Unfolding.",
"unfurling",
"space",
"preplanned randomness",
"interactive poetry", "internal/external literature", "perception or reading of language", "Medium is web architecture",
"Digital garden",
"Fragments",
"Deciduous",
"Boulevard", "Public focus", "Public/Private architecture",
"borrowed",
"a bodhi in a leaf",
"node",
"browser",
"vestigial", "vestige", "investigate", "vector",
"Archive Fever",
"en attendant", "environment", "entrance", "encrypt", "energy",
"cybord", "sculpting",
"metrospective",
"mark of the foot left on the earth", "echoes", "remainders", "remnants",
"Achieving address",
"ZIP", "zip code", "archive file", "Zero inner parts/pieces/places", "Zero inner parts",
"Nothing left over!",
"Z relates to depth", "Zesty", "Zag", "Zig", "zany", "Index",
"Coordinate Z",
"What is the coordinate for a poetic dimension?",
"Zesty Inner Pixels", "Zero Inner Pixel", "Zero indexed parts?",
"zoning index pages" 
]

function random_aphorism() {
     //create a random number based on length of the array
     //let r = Math.floor(Math.random() * aphorisms.length)
      let r = getRandom(aphorisms.length)
     //pull a random item from the array
     let random_item = aphorisms[r]
     //log the value of the item
     console.log(random_item)
  //write the value to the document/window
    let output_space = document.getElementById("aphorism")
    output_space.innerText = random_item
    //after outputting the random value, run again 5 seconds later
  //these values in paratheses are called arguments
    setTimeout("random_aphorism()", 400);

}

//call the function initially when the script loads
random_aphorism()

//a function can do seomthing or calculate something
function getRandom(len) {
   let r = Math.floor(Math.random() * len)
   return r  
}

//instead of calling the function, we access its result
//let randNum = getRandom()
//console.log('random number returned', randNum)
//get the length (property) of the array
let array_length = aphorisms.length
let randNum = getRandom(array_length)
console.log('random number', randNum)


//javascriot / html / css DOM (document object model) code demonstration

//access a tag/element
let output_space = document.getElementById("aphorism")
//change its contents
output_space.innerText = aphorisms[3]
//change its style
output_space.style.letterSpacing = "normal"


