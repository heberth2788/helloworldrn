import { Text, View } from "react-native";

interface ChildrenContainerProps {
    children: number | string;
}

export default function ChildrenContainer({ children }: ChildrenContainerProps) {
    return (
        <View style = {{
            alignContent: "center",
            justifyContent: "center",
            alignItems: "center",
        }}>
            <Text>{children}</Text>
        </View>
    );
}