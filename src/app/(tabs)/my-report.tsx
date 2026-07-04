import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function MyReport() {
    return (
        <View>
            <>
            <Text>My Report. By HD.</Text>
            <Link 
                href = "/add-info" 
                style = {{ color: "blue", fontWeight: "bold" }}
            >
                <Text>Add Info</Text>
            </Link>
            </>
        </View>
    );
}