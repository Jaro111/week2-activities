// ****************************************** Activity 1 ******************************************

// Create a program that stores someone's name,age andfavourite colour and log it to the console in a completesentence using Template Literals.
// Stretch
// Update all of your variables and write out anew sentence underneath your original.

// --------------------------------------------------

let randomName = "Alan";
let age = 31;
let favColour = "blue"

let sentence = `My name is ${randomName}. I am ${age}. My favourite colour is ${favColour}`
console.log(sentence)

// Update
randomName = "Anna"
age = "26"
favColour = "green"

sentence = `My name is ${randomName}. I am ${age}. My favourite colour is ${favColour}`
console.log(sentence)


console.log("********************************************************")
// ****************************************** Activity 2 ******************************************

// Create a program that stores what you eat todayfor breakfast,lunch and dinner.Log these to theconsole.
// Stretch
// Update each of these variables to what youwill eat tomorrow.Log these to the console.

// --------------------------------------------------
let breakfest = "sandwitches"
let lunch = "salad"
let dinner = "pizza"

console.log(`Today i had ${breakfest} for breakfest. ${lunch} for a lunch, and ${dinner} for a dinner`)

breakfest = "eggs"
lunch = "tuna"
dinner = "burgers"

console.log(`Tomorrow i will have ${breakfest} for breakfest. ${lunch} for a lunch, and ${dinner} for a dinner`)


console.log("********************************************************")
// ****************************************** Activity 3 ******************************************

// Create a program that calculates the number ofdays from today to your birth date.


// --------------------------------------------------
today = new Date();

let bthDay = new Date(today.getFullYear(), 4 - 1, 26 + 1);
diference = (bthDay - today) / (1000 * 60 * 60 * 24)
console.log(Math.floor(diference))


console.log("********************************************************")
// ****************************************** Activity 4 ******************************************

// >Create 9 variables:space¹,space2…space9>Assign either the value'x,'o',',to each ofthese variables.
// >Insert the variables into your boards usingthe ${varName}syntax and make it look likethe displayed board

// --------------------------------------------------

let space1 = "x";
let space2 = "o";
let space3 = " ";
let space4 = "x";
let space5 = "o";
let space6 = " ";
let space7 = "x";
let space8 = "o";
let space9 = " ";

let wall = "   |   |    ";
let wall1 = ` ${space1} | ${space2} | ${space3} `;
let wall2 = ` ${space6} | ${space4} | ${space5} `;
let wall3 = ` ${space7} | ${space9} | ${space8} `;

line = "-----------";

console.log(wall);
console.log(wall1);
console.log(wall);
console.log(line);
console.log(wall);
console.log(wall2);
console.log(wall);
console.log(line);
console.log(wall);
console.log(wall3);
console.log(wall);
