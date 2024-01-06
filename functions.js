// ****************************************** Activity 1 ****************************************** 

// Take this code and turn it into arrow function 
// syntax:

// function factorial (n) {
//     if ((n === 0) || (n === 1)) {
//         return 1;
//     } else {
//         return (n * factorial(n -1));
//     }
// }
// console.log(factorial(33))

// result 8.683317618811886e+36

// --------------------------------------------------

let factorial = (n) => {
    if ((n === 0) || (n === 1)) {
        return 1;
    } else {
        return (n * factorial(n -1));
    }
}
console.log(factorial(33))

console.log("********************************************************")
// ****************************************** Activity 2 ****************************************** 

// Edit the below snippet to include two parameters and a 
// running order count updated when the function is called:

// let orderCount = 0;

// const takeOrder = (topping) => {
//     console.log(`Pizza with ${topping}`)
//     orderCount++;
// }

// takeOrder("pineapple")

// --------------------------------------------------

let orderCount = 0;

const takeOrder = (topping1, topping2) => {
    console.log(`Pizza with ${topping1}, and ${topping2}`)
    orderCount++;
}

takeOrder("pineapple", "ham")

console.log("********************************************************")
// ****************************************** Activity 3 ****************************************** 

// Cash machine time! 
// Let’s create one that:
// > Dispenses cash if your pin number is correct and your 
// balance is equal to, or more than, the amount you’re 
// trying to withdraw!

// --------------------------------------------------

const pin = 1234
const balance = 400

const cashMachine = (pinNumber, amountToWithdrawal) => {
    if (pinNumber === pin) {
        console.log("Pin correct")
        if (amountToWithdrawal <= balance) {
            console.log("Succesfull Withdrawal")
            console.log(`Your current balance is: ${balance - amountToWithdrawal} $`);
        } else {console.log(`You have exceeded the balance by ${balance - amountToWithdrawal}. Try a smaller amount`)
                console.log(`Your current balance is ${balance} $`)

    }
    } else {console.log("Wrng Pin number")};
}


cashMachine(1234, 500)