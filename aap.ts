// project 43

function makeGreat(magicians: string[]): string[] {
    const greatMagicians: string[] = [];
    for (let magician of magicians) {
        const greatMagician: string = magician + " the Great";
        greatMagicians.push(greatMagician);
    }
    return greatMagicians;
}

function showMagicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

let magicians: string[] = ["Alice", "Bob", "Charlie"];

// Create a copy of the original list of magicians
let originalMagicians: string[] = magicians.slice();

// Call makeGreat() with a copy of the original array
let greatMagicians: string[] = makeGreat(originalMagicians);

// Show the original magicians
console.log("Original Magicians:");
showMagicians(originalMagicians);

// Show the great magicians
console.log("\nGreat Magicians:");
showMagicians(greatMagicians);


// project 44

function orderSandwich(...items: string[]): void {
    console.log("Sandwich Order:");
    console.log("Bread: Wheat");
    console.log("Items:");
    for (let item of items) {
        console.log("- " + item);
    }
    console.log("Enjoy your sandwich!");
}

// Call the function three times with different number of arguments
orderSandwich("Ham", "Cheese", "Lettuce");
orderSandwich("Turkey", "Tomato");
orderSandwich("Tuna");


// project 45

interface Car {
    manufacturer: string;
    modelName: string;
    [key: string]: any;
}

function createCar(manufacturer: string, modelName: string, ...options: [string, any][]): Car {
    let car: Car = {
        manufacturer: manufacturer,
        modelName: modelName
    };
    for (let [key, value] of options) {
        car[key] = value;
    }
    return car;
}

// Call the function with required information and additional name-value pairs
let myCar: Car = createCar("Toyota", "Camry", ["color", "blue"], ["year", 2022]);

// Print the returned object to ensure all information was stored correctly
console.log("\nCar Information:");
console.log(myCar);