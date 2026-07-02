// Defining a nullable type using union types
type Name = string | null;

let myName: Name = "HD"; 
const length: number = myName?.length; // Optional chaining operator to safely access the length property
const displayName: string = myName ?? "Anonymous"; // Nullish coalescing operator to provide a default value
if (myName !== null) { /* Do something */} 

myName = null;

// Using NonNullable utility type to exclude null and undefined from a type
type StrictName = NonNullable<Name>;

let strictName: StrictName = "HD";
strictName = "JV";

// Use of "in" operator, it is used to check if a property exists in an object or not
interface Person {
    name: string;
    age: number;
}

const person: Person = {
    name: "HD",
    age: 30
};

if ("name" in person) {
    console.log(`Name exists in person object: ${person.name}`);
} else {
    console.log("Name does not exist in person object.");
}

// Use of "instanceof" operator, it is used to check if an object is an instance of a particular class or constructor function
class Animal {
    constructor(public name: string) { }
}

class Dog extends Animal {
    bark() {
        console.log("Woof!");
    }
}

const myDog = new Dog("Buddy");

if (myDog instanceof Dog) {
    myDog.bark(); // Safe to call bark() method
} else {
    console.log("myDog is not an instance of Dog.");
}