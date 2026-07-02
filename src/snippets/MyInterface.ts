interface MyInterface {
  name: string;
  greet(): void;
  hobbies: string[];
  address: {
    street: string;
    city: string;
    country: string;
  };
  [key: string]: any; // Index signature for additional properties
}

interface MyInterface {
    id: String;
    email: String;
}

const myObject: MyInterface = {
    name: "Heberth Deza",
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    },
    hobbies: ["Reading", "Coding", "Traveling"],
    address: {
        street: "123 Main St",
        city: "New York",
        country: "USA"
    },
    key1: "value1",
    key2: 42,
    key3: true,
    id: "12345",
    email: "heberth.deza@example.com",
}