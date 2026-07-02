class MyClass {

    public bar: string = "This is a public property";
    lorem: string = ""; // public by default

    protected baz: string = "This is a protected property"; // protected can not be accessed outside the class or instances

    private name: string;
    private age: number;


    constructor(
        name: string, 
        age: number, 
        public gender: string,
    ) {
        this.name = name;
        this.age = age;
    }

    // public by default
    printName() {
        console.log("My name is " + this.name);
    }

    public printGender() {
        console.log("My gender is " + this.gender);
    }

    // protected can not be accessed outside the class or instances
    protected printAge() {
        console.log("My age is " + this.age);
    }

    private foo() {
        console.log("This is a private method");    
    }
}

let myObject1: MyClass = new MyClass("Heberth Deza", 30, "Male");
const myObject2: MyClass = new MyClass("Heberth Deza", 30, "Male");