// ****************************************** Activity 1 ****************************************** 

// Let’s edit our person object to include…
// A function called sayHi and when it’s called, it 
// should return “Hello my name is ${this.name}

// --------------------------------------------------
let person = {
    name: 'Jarek',
    age: 18,
    favouriteSongs: [
        "Holy Diver",
        "Braking the law",
        "Enter the Sandman",
        "Babys on fire",
        "Highway to hell",
        "Thunderstruck"
    ],
    sayHi() {
        return `Hello my name is ${this.name}`}
};

console.log(person.sayHi())

console.log("********************************************************")
// ****************************************** Activity 2 ****************************************** 

// Create an object called pet with the key values of:
// name, typeOfPet, age, colour
// And methods called eat and drink. They should return a string 
// saying [Your Pet Name] is eating/drinking

// --------------------------------------------------

const pet = {
    petName: "Mandy",
    typeOfPet: "dog",
    age: 3,
    color: "Black and brown",
    eat() {
        return `${this.petName} is eating`},
    drink() {
        return `${this.petName} is drinking`}

}

console.log(pet.eat())
console.log(pet.drink())

console.log("********************************************************")
// ****************************************** Activity 3 ****************************************** 

// Create an object called coffeeShop with key values of:
// branch, drinks with prices, food with prices
// And methods called drinksOrdered and foodOrdered.
// They should return a string saying [Your order] is … with 
// all items chosen with costs and total cost.

// --------------------------------------------------

let orderSum = 0
let orderSum1 = 0

const coffeeShop = {
    branch: "Branch",
    drinks: {
        coffee: 5,
        tea: 3,
        iceTea: 4,
        iceCoffee: 6,
        latte: 5.5,
        americano: 4.5
    },
    food: {
        sandwich: 5,
        cake: 4,
        cookies: 3,
        croissant: 4.5,
        brownies: 5.5
    }

}




drinksOrder = (array) => 
    {console.log(`Your drink order is: `)
    for (i = 0; i < array.length; i ++)
    {console.log(`${array[i]}: `, coffeeShop.drinks[array[i]])
    orderSum += coffeeShop.drinks[array[i]]
    }
    console.log(`Cost of drink order is: ${orderSum}`);
    return orderSum
    }
    

foodsOrder = (array) => 
    {console.log(`Your food order is: `)
    for (i = 0; i < array.length; i ++)
    {console.log(`${array[i]}: `, coffeeShop.food[array[i]])
    orderSum1 += coffeeShop.food[array[i]]
    }
    console.log(`Cost of food order is: ${orderSum1}`);
    return orderSum1
    }
    

console.log("-------------------------")

orderDrink = drinksOrder(["coffee", "tea"])

console.log("-------------------------")

orderFood = foodsOrder(["brownies", "cake"])

console.log("-------------------------")

console.log(`Total cost: ${orderDrink + orderFood}`)

