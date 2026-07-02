export default class ExportDefault {
    
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