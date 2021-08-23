import React, { useContext } from "react";
import { Platform, TouchableOpacity, Text, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";

import MapScreen from "../screens/MapScreen";
import NewPlaceScreen from "../screens/NewPlaceScreen";
import PlaceDetailScreen from "../screens/PlaceDetailScreen";
import PlaceListScreen from "../screens/PlaceListScreen";
import Colors from "../constants/Colors";
import { MapContext } from "../contexts/MapContext";

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

const mapScreenRightHeaderHandler = (props) => {
  return !props.route.params.readOnly ? (
    <TouchableOpacity
      onPress={() => {
        /***********************************************
         * Don't need send params to NewPlace Screen Because location save in MapContext
         * So NewPlaceScreen take location from MapContext
         *
         ****************************************/
        // props.navigation.navigate("NewPlaceScreen", {
        //   location: props.route.params.location,
        // });

        props.navigation.goBack();
        //// OR
        //props.navigation.navigate("NewPlaceScreen");
      }}
    >
      <Text style={styles.headerButtonText}>Save</Text>
    </TouchableOpacity>
  ) : null;
};

const placeListScreenRightHandler = (navigation, clearLocation) => {
  return {
    ...headerConfiguration("List Screen"),
    headerRight: () => (
      <TouchableOpacity
        onPress={() => {
          clearLocation(); // When user can click on new Place Screen then clear location
          navigation.navigate("NewPlaceScreen");
        }}
      >
        <Ionicons
          name="add"
          size={35}
          color={Platform.OS === "android" ? "white" : Colors.primary}
        />
      </TouchableOpacity>
    ),
  };
};

const PlaceNavigator = () => {
  const { clearLocation } = useContext(MapContext);
  return (
    <NavigationContainer>
      <PlaceStack.Navigator initialRouteName="PlaceListScreen">
        <PlaceStack.Screen
          name="PlaceListScreen"
          component={PlaceListScreen}
          /********************************************************
           *  The following comment is just config Header
           *  without headerRight
           *******************************************************/
          //options={{...headerConfiguration("PLace List")}}

          /********************************************************
           *  The following comment is just config Header
           *  with headerRight
           *******************************************************/
          // options={({ navigation }) => ({
          //   ...headerConfiguration("List Screen"),
          //   headerRight: () => (
          //     <TouchableOpacity
          //       onPress={() => navigation.navigate("NewPlaceScreen")}
          //     >
          //       <Ionicons
          //         name="add"
          //         size={35}
          //         color={Platform.OS === "android" ? "white" : Colors.primary}
          //       />
          //     </TouchableOpacity>
          //     //   <Button
          //     //     onPress={() => navigation.navigate("NewPlaceScreen")}
          //     //     title="Add"
          //     //   />
          //   ),
          // })}

          /***********************************************************
           * The Upper comments code is also working. Make
           * a placeListScreenRightHandler is easy to understand
           *************************************************/

          options={({ navigation }) =>
            placeListScreenRightHandler(navigation, clearLocation)
          }
        />
        <PlaceStack.Screen
          name="PlaceDetailScreen"
          component={PlaceDetailScreen}
          // options={{ ...headerConfiguration("Place Detail") }}

          /*******************************************************
           *  Give title to the screen on run time
           ******************************************************/
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
            headerRight: () => mapScreenRightHeaderHandler(props),
            /***********************************************************
             * The following code is also working. Make
             * a mapScreenRightHeaderHandler is easy to understand
             *************************************************/

            // headerRight: () => {
            //   return !props.route.params.readOnly ? (
            //     <TouchableOpacity
            //       onPress={() => {
            //         props.navigation.navigate("NewPlaceScreen", {
            //           location: props.route.params.location,
            //         });

            //         // props.navigation.goBack();
            //       }}
            //     >
            //       <Text style={styles.headerButtonText}>Save</Text>
            //     </TouchableOpacity>
            //   ) : null;
            // },
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
