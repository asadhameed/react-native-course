import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/screen/HomeScreen";
import ResultShowScreen from "./src/screen/ResultShowScreen";

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Business Search" }}
        />
        <Stack.Screen
          name="ResultShowScreen"
          component={ResultShowScreen}
          options={{ title: "Business Search" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
