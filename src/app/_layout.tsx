import { Stack } from "expo-router";
import "../../global.css";

export default function RootLayout() {
  return (
    <Stack 
      screenOptions = {{
        title: "Hello World RN",
        headerStyle: { backgroundColor: "lightblue" },
        headerTitleStyle: { color: "black", fontWeight: "bold" },
      }}
    >
        <Stack.Screen 
          name = "(tabs)" 
          options = {{ title: "Main Screen", /* headerShown: false */ }}
        />
    </Stack>
  );
}
