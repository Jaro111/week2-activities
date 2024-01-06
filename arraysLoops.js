// ****************************************** Activity 1 ****************************************** 

// Create an array that lists your favourite films, up to 
// 5 elements.
// Add 2 more using a method
// Use a loop to cycle through the array

// --------------------------------------------------

let filmsList = ["Pulp Fiction", "Lord of the rings", "Fight Club", "Rocky", "Seven"]

filmsList.push("Big short", "Wolf from wall street")

for (i = 0; i < filmsList.length; i ++) {
    console.log(filmsList[i])
};

console.log("********************************************************")
// ****************************************** Activity 2 ****************************************** 

// Create an array that lists your favourite films, up to 
// 5 elements.
// Add 2 more using a method
// Use a loop to cycle through the array

// --------------------------------------------------

for (i = 0; i < 6; i++) {
    console.log(Math.ceil(Math.random() * 50))
}

console.log("********************************************************")
// ****************************************** Activity 3 ****************************************** 

// If we can create a loop to put 0 - 9 on the screen, 
// how can we count from 9 - 0? Create a program 
// that does this

// --------------------------------------------------

for (i = 9; i >= 0; i --) {
    console.log(i)
}

console.log("********************************************************")
// ****************************************** Activity 4 ****************************************** 

// Displays 4 films stored in an array.
// Use a for loop to show each film in the array
// Use an if statement to check if the 3rd film in the 
// array is Ghostbusters.
// If it is, return “Yay its Ghostbusters”. If it isn't return 
// “Boo! We want Ghostbusters”

// --------------------------------------------------

films = ["Pulp Fiction", "Fight club", "Ghostbusters", "Rain man"]

for (i = 0; i < films.length; i ++) {
    console.log(films[i])
    }
    if (films[2] === "Ghostbusters") {
        console.log("Boo! We want Ghostbusters")}

console.log("********************************************************")
// ****************************************** Activity 5 ****************************************** 

// Generate a random number between 1 - 30 six 
// times.
// For each random number generated, check if this 
// number is divisible by 7 or not.
// Log out a message to the console if it is divisible by 
// 7 or not.

// --------------------------------------------------

for (i = 0; i < 6; i++) {
    let myRandom = Math.ceil(Math.random() * 30);
    if (myRandom%7 === 0) {
        console.log(myRandom, "Is divisible by 7")
    } else {console.log(myRandom, "Is not divisinble by 7")}
}

console.log("********************************************************")  
// ****************************************** Activity 6 ****************************************** 

// Imagine you’re a programmer for a social media platform! 
// You have been tasked with building a prototype for a 
// mutual followers program.
// > Create 2 arrays of followers e.g. bobsFollowers & 
// hannahsFollowers. In these arrays place 4 names as strings. 
// Make sure there are 2 names that are in BOTH arrays.
// > Using a nested loop iterate over both arrays and 
// console.log out the matching followers

// --------------------------------------------------

bobsFollowers = ['@johny121', '@timthegreat0089', '@anna099000', 'robert0001123'];
hannahsFollowers = ['sharon901287', 'lord098712', '@anna099000', 'kevin774211'];

for (i = 0; i < bobsFollowers.length; i++) {
    for (j = 0; j < hannahsFollowers.length; j ++) {
        if (hannahsFollowers[j] === bobsFollowers[i]) {
            console.log(hannahsFollowers[j])
        };
    };
}

console.log("********************************************************")
// ****************************************** Activity 7 ****************************************** 

// Research on do…while loop, find out about the 
// difference between for loop, while loop and do…
// while loop. Give an example of each. What are the 
// pros and cons?

// --------------------------------------------------

// This same result looping by diferent way

//  ****** for ******

let n = 0

for (i = 0; i <= 5; i++) {
    n += i
}
console.log(n)

//  ****** do…while ******

// let n = 0;
// let i = 0;

// do {
//   i ++;
//   n += i;

// } while (i < 5);

// console.log(n)

// ****** while ******

// let i = 0;
// let n = 0;

// while (i <= 5) {
//     n += i;
//     i ++ 
// }

// console.log(n)

// --------------------------------------------------

//for loop, which is used when you know in advance how many iterations are needed
// while loop repeats as long as a given condition is true
// do-while loop guarantees at least one execution of the loop body before checking the condition