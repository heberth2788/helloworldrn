// Union types
type ID = string | number; // Pipe character "|" is used to define union types

const myId: ID = "123456"; 
const myId2: ID = 123456;

function useTypeOf(id: ID) {
    if (typeof id === "string") { /* Do something */ }
    if (typeof id === "number") { /* Do something */}
}

// Tuple type
type Point = [number, number];

const myPoint: Point = [10, 20];

// Intersection types
type MyType = {
    role: "admin";
} & { name: string };

const myObject: MyType = {
    role: "admin",
    name: "Heberth Deza"
};

// Literal types
type Direction = "up" | "down" | "left" | "right";

const myDirection: Direction = "up";