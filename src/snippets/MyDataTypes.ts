class MyDataTypes {

    myArray() {
        const myArrayObj: User[] = [
            { id: 1, name: "John Doe", email: "john.doe@example.com" },
            { id: 2, name: "Jane Smith" },
            { id: 3, name: "Heberth Deza", email: "heberth2788@gmail.com"},
        ];
        myArrayObj.push({id: 4, name: "Lilian Martines"});
    }

    myTuple() {
        const myTupleObj: [string, number, boolean] = ["HD", 38, true];
    }

    mySet() {
        const mySetObj: Set<number> = new Set([1, 2, 3]);
        mySetObj.add(4);
    }

    myMap() {
        const myMapObj: Map<number, string> = new Map(
            [[1, "HD"], [2, "JV"]]
        );
        myMapObj.set(3, "LM");
    }
}

interface User {
    id: number;
    name: string;
    email?: string;
}