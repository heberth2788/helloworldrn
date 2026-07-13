import { Text } from "react-native";

type DashProps = {
    myNum: string;
    myName: string;
    random?: number;
};

function MyDashboard(props: DashProps) {
    return <Text>My Dashboard. {props.myNum}, {props.myName} {props.random ?? "random N/A"} By HD.</Text>;
}

export default MyDashboard;