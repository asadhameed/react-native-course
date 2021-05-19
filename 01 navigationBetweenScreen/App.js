import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./src/HomeScreen";
import ListScreen from "./src/ListScreen";
import ComponentScreen from "./src/ComponentScreen";

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home">
        <Stack.Screen name="home" component={HomeScreen} />
        <Stack.Screen name="list" component={ListScreen} />
        <Stack.Screen name="component" component={ComponentScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
