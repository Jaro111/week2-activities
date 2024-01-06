// ****************************************** Activity 1 ******************************************

// Create a variable called age. Write an if statement
// that logs “Yes I can serve you” if the age is greater 
// than 17 and else logs “You aren’t old enough”.
// Take your if statement and add a variable 
// called country in.
// Strech
// Eg. if age > 17 and country == “UK”

// --------------------------------------------------

let age = 22;
let country = "UK"

if (age > 17 && country === "UK") {
    console.log("Yes I can serve You");
} else if ( age <= 17 && country === "UK") { 
    console.log("You are not old enough")
} 
  else {console.log("I dont know the rules, because we are not in UK")}

console.log("********************************************************")
// ****************************************** Activity 2 ******************************************  

// Create a variable for any pizza topping. 
// Create a switch statement, if the topping is one of your 
// favourite ingredients, log to the console “These are 
// important ingredients for my pizza.” If you don’t mind 
// having Pepperoni for example log to the console “I don’t 
// mind having ${topping} on my pizza. 
// Finally, for any topping you don’t like log “${topping} 
// should not be on a pizza.”

// --------------------------------------------------

let topping = "Onions";

switch(topping) {
  case "Pepperoni":
  case "Onion":
  case "Jalapenos":
  case "Mushrooms":
  case "Hem":
    console.log(`${topping} is important ingredient for my pizza`);
    break;
  case "Beef":
  case "Peppers":
  case "Tuna":
  case "Shrimps":
    console.log(`I dont't mind having ${topping} on my pizza`);
    break;
  default:
    console.log(`${topping} should not be on pizza`)
}

console.log("********************************************************")
// ****************************************** Activity 3 ******************************************  
// Create a variable called password. 
// Check how many letters are in the password, if there are 
// less than 8, log to the console that the password is too 
// short. Otherwise log the password to the console. 
// STRECH
// Create a variable called num. 
// Check if the variable is divisible by 3 or 5. If it 
// is, log “This number is divisible by 3 or 5”. 
// Otherwise log something else.
// --------------------------------------------------

let password = "blablab";

if (password.length < 8) {
  console.log("Password is too short");
} else {
  console.log(password);
};

// ----------------------------- STRECH -----------------------------
let num = 12;

if (num%3 === 0 || num%5 === 0) {
  console.log("This number is divisible by 3 or 5");
} else {
  console.log(" This number is not divisible by 3 or 5");
};

console.log("********************************************************")
// ****************************************** Activity 4 ******************************************  

// Create a variable called num.
// If num is divisible by 3 log “fizz” to the console, if it’s divisible by 
// 5 log “buzz” to the console, if it’s divisible by both 3 and 5 log 
// “fizz buzz” to the console. Otherwise log num to the console.

// --------------------------------------------------

let num2 = 2

if (num2%3 === 0 && numb%5 === 0) {
  console.log("fizz buzz");
} else if(num2%3 === 0) {
  console.log("fizz");
} else if (num2%5 === 0) {
  console.log("buzz");
} else {console.log(num2)};

console.log("********************************************************")
// ****************************************** Activity 5 ******************************************  
// Create a variable called num.
// Check if the number is a palindrome (looks the 
// same forward as it does backwards e.g. 1001 or 
// 20202).

// --------------------------------------------------

let num3 = 5225;
let rev = Number(num3.toString().split('').reverse().join(''));

if (num3 === rev) {
    console.log("This number is a palindrome");
} else {console.log("This is not palindrome")};

console.log("********************************************************")
// ****************************************** Activity 6 ****************************************** 
// Create a variable called time, a variable called placeOfWork 
// and a variable called townOfHome. Create an if statement that 
// logs to the console where someone is at times of the day. E.g. if 
// the time is 7 I’m at home, at 8 I’m commuting, at 9 I’m at work.

// --------------------------------------------------

let time = 18;
let placeOfWork = 9;
let townOfHome = 7;

if (time >= placeOfWork && time <= 15) {
    console.log("I'm at work");
} else if (time <= townOfHome || time > 17) {
    console.log("I'm at home");
} else { console.log("I'm commuting")};

console.log("********************************************************")
// ****************************************** Activity 7 ****************************************** 

// Take the string 
// “jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuh 
// gtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi”. Find the 
// index of a last vowel in the string.

// --------------------------------------------------

let myString = 'jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwsh'
let substr =  ('a','e','i','o','u');
const lastVowel = myString.lastIndexOf(substr);
console.log(lastVowel);

console.log("********************************************************")
// ****************************************** Activity 8 ****************************************** 
// Create a variable called word that takes a string. Create 
// an if statement that checks if the last letter is the same as 
// the first. If it is return true, otherwise return false.

// --------------------------------------------------

let word = 'anconda';
let firstLetter = word[0];
let lastLetter = word.slice(-1);

if (firstLetter === lastLetter) {
    console.log("true");
} else {console.log("false")};

console.log("********************************************************")
// ****************************************** Activity 9 ****************************************** 
// Create two variables called num1 and num2.
// Create an if statement that checks if the result of the 
// sum is even. If it is return the number, otherwise return 
// the numbers multiplied together.

// --------------------------------------------------

let num4 = 13;
let num5 = 12;

let sumNumbers = num4 + num5;

if (sumNumbers%2 === 0) { 
    console.log(sumNumbers);
} else {
    console.log(num4 * num5);
};