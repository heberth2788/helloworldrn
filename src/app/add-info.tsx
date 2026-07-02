import { Text, View } from "react-native";

const styles = {
    card: {
        backgroundColor: "lightblue",
        padding: 10,
        margin: 10,
        borderRadius: 5, 
    }
}

export default function AddInfo() {
    return (
        <View style = {[ styles.card, { borderLeftColor: "black", borderLeftWidth: 5 } ]}>
            <Text>Add Info</Text>
        </View>
    );
}