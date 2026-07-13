import { StyleSheet, Text, View } from "react-native";
 
import React from "react";

interface ChildrenContainerProps {
    children: React.ReactNode;
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 12,
    }
});

export default function ChildrenContainer({ children }: ChildrenContainerProps) {
    return (
        <View style={styles.container}>
            <Text>{children}</Text>
            <Text>{children}</Text>
            <Text>{children}</Text>
            <Text>{children}</Text>
        </View>
    );
}