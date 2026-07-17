import MyDashboard from "@/feature/dashboard/my-dashboard";
import MyForm from "@/feature/form/my-form";
import ChildrenContainer from "@/feature/shared/ChildrenContainer";
import { Link } from "expo-router";
import { useState } from "react";
import { Button, Image, StyleProp, StyleSheet, Text, View } from "react-native";
import "../../../global.css";

export default function MainScreen() {

  // const [count, setCount] = useState(0);
  const [imHungry, setImHungry] = useState<boolean>(true);

  const num: number = 369;
  const str: string = "369";

  const currentDate: string = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <View style = {styles.container}> 
      <MyDashboard myNum = {str} myName = "Heberth Deza"/>
      { MyForm(num) }
      <Image 
        style = {{width: 130, height: 130}}
        source = {{uri: "https://reactnative.dev/docs/assets/p_cat1.png"}}
      />

      <Text> {currentDate} </Text>

      <ChildrenContainer>1988</ChildrenContainer>

      <Text className="text-3xl text-blue-800"> I'm {imHungry ? "really" : "not"} starving </Text>
      <Button 
        title = "Give me food" 
        onPress = { () => setImHungry(false) }
        disabled = { !imHungry }
      />
      <Button 
        title = "Reset"
        onPress = { () => setImHungry(true) }
      />

      <Link 
        href="/my-report"
        style = {{
          color: "blue",
          fontWeight: "bold",
          marginTop: 20,
        }}
      >Go to My Report</Link>
    </View>
  );
}

const styles: StyleProp<any> = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  text: {
    fontSize: 15,
    fontWeight: "bold",
  },
});

/*<View style = {styles.container}>
  <Text style = {{fontSize: 20, fontWeight: "bold"}}>Hello World from React Native. By HD.</Text>
  <Text style = {styles.text}>Platform: {Platform.OS}</Text>
  <Text>Device Name: {CurrentDevice.deviceName}</Text>
  <Text> OS Build Fingerprint: {CurrentDevice.osBuildFingerprint}</Text>
  <Text> OS Version: {CurrentDevice.osVersion}</Text>
  <Text> Other info HD: {CurrentDevice.deviceType} </Text>
  <Text>Count: {count} , {num}</Text>
  <Button title = "Plus" onPress = {() => setCount(count + 1)} />
  <Button title = "Reset" onPress = {() => setCount(0)} />
  <Button title = "Num" onPress = {() => { 
    if (typeof num === "number") {
      num = num + 1
    } else {
      num = num + "1"
    }
  }}/>
</View> */
