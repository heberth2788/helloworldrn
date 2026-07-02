import { Stack } from "expo-router";

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
          name = "index" 
          options = {{ title: "Main Screen", /* headerShown: false */ }}
        />
        <Stack.Screen 
          name = "my-report" 
          options = {{ title: "My Report" }} 
        />
        <Stack.Screen
          name = "add-info"
          options = {{ title: "Add Info" }}
        />
    </Stack>
  );
}
