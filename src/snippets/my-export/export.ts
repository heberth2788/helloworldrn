export const MYPI = 3.1416;

export function myFunction(num: number): string {
    console.log("Hello World from myFunction");
    return `The number is ${num}`;
}

export class MyClass {
 
    private myPrivateVar: string;

    constructor(
        myPrivateVar: string,
        public myPublicVar: number,
    ) {
        this.myPrivateVar = myPrivateVar;
    }

    public myPublicMethod(): string {
        return `The private variable is ${this.myPrivateVar}`;
    }
}