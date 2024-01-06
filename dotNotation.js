// ****************************************** Activity 1 ******************************************
// Have a go at logging a grid like this to the console.
// Stretch
// If you figure it out,try researching arrays andloops and see if you can do it that way.
// (CUDENATION }

// --------------------------------------------------

// Variables

wall = "   |   |    ";
line = "-----------";

// --------------- Regular way ---------------

console.log(wall);
console.log(wall);
console.log(wall);
console.log(line);
console.log(wall);
console.log(wall);
console.log(wall);
console.log(line);
console.log(wall);
console.log(wall);
console.log(wall);

console.log("********************************************************")
// --------------- For way ---------------


for ( i = 0; i < 11; i ++) {
    if (i === 3 ||  i === 7) {
        console.log(line);
    }
    else {
        console.log(wall);
    }
};

