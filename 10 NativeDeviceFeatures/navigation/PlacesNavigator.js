import React from "react";
import { Platform, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";

import MapScreen from "../screens/MapScreen";
import NewPlaceScreen from "../screens/NewPlaceScreen";
import PlaceDetailScreen from "../screens/PlaceDetailScreen";
import PlaceListScreen from "../screens/PlaceListScreen";
import Colors from "../constants/Colors";

const PlaceStack = createStackNavigator();

const headerConfiguration = (title) => {
  return {
    title,
    headerStyle: {
      backgroundColor: Platform.OS === "android" ? Colors.primary : "white",
    },
    headerTitleAlign: "center",
    headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,
  };
};

const PlaceNavigator = () => {
  return (
    <NavigationContainer>
      <PlaceStack.Navigator initialRouteName="PlaceListScreen">
        <PlaceStack.Screen
          name="PlaceListScreen"
          component={PlaceListScreen}
          //options={{...headerConfiguration("PLace List")}}
          options={({ navigation, router }) => ({
            ...headerConfiguration("List Screen"),

            headerRight: () => (
              <TouchableOpacity
                onPress={() => navigation.navigate("NewPlaceScreen")}
              >
                <Ionicons
                  name="add"
                  size={35}
                  color={Platform.OS === "android" ? "white" : Colors.primary}
                />
              </TouchableOpacity>
              //   <Button
              //     onPress={() => navigation.navigate("NewPlaceScreen")}
              //     title="Add"
              //   />
            ),
          })}
        />
        <PlaceStack.Screen
          name="PlaceDetailScreen"
          component={PlaceDetailScreen}
          options={{ ...headerConfiguration("Place Detail") }}
        />
        <PlaceStack.Screen
          name="NewPlaceScreen"
          component={NewPlaceScreen}
          options={headerConfiguration("New Place")}
        />
        <PlaceStack.Screen
          name="MapScreen"
          component={MapScreen}
          options={headerConfiguration("Map Screen")}
        />
      </PlaceStack.Navigator>
    </NavigationContainer>
  );
};

export default PlaceNavigator;
