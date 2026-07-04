import Ionicons from '@react-native-vector-icons/ionicons';
import { Tabs } from 'expo-router';
import { useColorScheme } from 'react-native';

export default function TabsLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions = {{
        headerShown: false,
        //tabBarActiveTintColor: colorScheme === 'dark' ? '#ffffff' : '#000000',
      }}
    >
      <Tabs.Screen
        name = "index"
        options = {{
          title: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name = "home" color = {color} size = {size} />
          ),
        }}
      />
      <Tabs.Screen
        name = "my-report"
        options = {{
            title: 'My report',
            tabBarIcon: ({ color, size}) => (
                <Ionicons name = "document-outline" color = {color} size = {size}/>
            )
        }}
      />
      <Tabs.Screen
        name = "add-info"
        options = {{
          title: 'Add Info',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name = "add-outline" color = {color} size = {size} />
          ),
        }}
      />
    </Tabs>
  );
}
