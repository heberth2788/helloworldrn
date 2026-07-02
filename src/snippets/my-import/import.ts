import { MYPI, MyClass, myFunction } from "@/snippets/my-export/export";
import ExportDefault from "@/snippets/my-export/ExportDefault";

function testMyExport() {
    console.log("MYPI:", MYPI);
    const result: string = myFunction(5);

    const myClassInstance = new MyClass("Hello", 42);
    console.log(myClassInstance.myPublicMethod());

    const exportDefaultInstance = new ExportDefault("World", 100);
    console.log(exportDefaultInstance.myPublicMethod());
}