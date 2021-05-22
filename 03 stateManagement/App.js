import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/screens/HomeScreen";
import CounterScreen from "./src/screens/CounterScreen";
import ColorScreen from "./src/screens/ColorScreen";
import SquareScreen from "./src/screens/SquareScreen";
import SquareReducerScreen from "./src/screens/SquareReducerScreen";
import TextScreen from "./src/screens/TextScreen";
const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouterName="home">
        <Stack.Screen name="home" component={HomeScreen} />
        <Stack.Screen name="counter" component={CounterScreen} />
        <Stack.Screen name="color" component={ColorScreen} />
        <Stack.Screen name="squareColor" component={SquareScreen} />
        {/* SquareScreen and SquareReducerScreen have same App 
          SquareReducer use the Reducer hook
        */}
        <Stack.Screen
          name="squareReducerColor"
          component={SquareReducerScreen}
        />
        <Stack.Screen name="textScreen" component={TextScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
