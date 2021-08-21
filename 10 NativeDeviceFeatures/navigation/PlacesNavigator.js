import React from "react";
import { Platform, TouchableOpacity, Text, StyleSheet } from "react-native";
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
          // options={{ ...headerConfiguration("Place Detail") }}
          options={({ route }) => ({
            ...headerConfiguration(route.params.place.title),
          })}
        />
        <PlaceStack.Screen
          name="NewPlaceScreen"
          component={NewPlaceScreen}
          options={headerConfiguration("New Place")}
        />
        <PlaceStack.Screen
          name="MapScreen"
          component={MapScreen}
          options={(props) => ({
            ...headerConfiguration("Map Screen"),
            headerRight: () => (
              <TouchableOpacity
                onPress={() => {
                  props.navigation.navigate("NewPlaceScreen", {
                    location: props.route.params.location,
                  });

                  // props.navigation.goBack();
                }}
              >
                <Text style={styles.headerButtonText}>Save</Text>
              </TouchableOpacity>
            ),
          })}
        />
      </PlaceStack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  headerButtonText: {
    fontSize: 16,
    color: Platform.OS === "android" ? "white" : Colors.primary,
    marginHorizontal: 10,
  },
});

export default PlaceNavigator;
