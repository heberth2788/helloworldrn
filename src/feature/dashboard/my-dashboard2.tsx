import { Text } from "react-native";

type MyDashboard2Props = {
    myNum: string;
    myName: string;
    random?: number;
}

export default function MyDashboard2(
    { myNum, myName, random }: MyDashboard2Props,
) {
    return <Text>My Dashboard. {myNum}, {myName} [{random ?? "random N/A"}] By HD.</Text>;
}