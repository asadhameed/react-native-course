import React from "react";
import { TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";

import CategoriesScreen from "../screen/CategoriesScreen";
import CategoryMealScreen from "../screen/CategoryMealScreen";
import MealDetailScreen from "../screen/MealDetailScreen";
import FavoriteScreen from "../screen/FavoritesScreen";
import FiltersScreen from "../screen/FiltersScreen";

import Colors from "../constants/Colors";

const BottomTab = createBottomTabNavigator();
// const BottomTab = createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const headerStyle = {
  headerTitleAlign: "center",
  headerTintColor: "white",
  headerStyle: {
    backgroundColor: Colors.primaryColor,
  },
};

const headerButton = (title, navigation) => {
  return {
    ...headerStyle,
    title: title,
    headerLeft: (props) => {
      return (
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <Ionicons name="menu" size={25} color={props.tintColor} />
        </TouchableOpacity>
      );
    },
  };
};

const MealsNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={headerStyle}
      // screenOptions={({ navigation }) =>
      //   headerButton("Meal Category", navigation)
      // }
    >
      <Stack.Screen name="categoriesScreen" component={CategoriesScreen} />
      <Stack.Screen name="categoryMealScreen" component={CategoryMealScreen} />
      <Stack.Screen name="mealDetailScreen" component={MealDetailScreen} />
    </Stack.Navigator>
  );
};

const FavoriteNavigation = () => {
  return (
    <Stack.Navigator screenOptions={headerStyle}>
      <Stack.Screen name="favoritesScreen" component={FavoriteScreen} />
      <Stack.Screen name="mealDetailScreen" component={MealDetailScreen} />
    </Stack.Navigator>
  );
};

const BottomNavigation = () => {
  return (
    <BottomTab.Navigator
      screenOptions={{
        header: () => null,
        tabBarStyle: {
          backgroundColor: Colors.primaryColor,
        },
      }}
    >
      <BottomTab.Screen
        options={{
          tabBarLabel: "Meals",
          tabBarActiveTintColor: Colors.accentColor,
          tabBarIcon: ({ color, size, focused }) =>
            focused ? (
              <Ionicons name="ios-restaurant" size={size} color={color} />
            ) : (
              <Ionicons name="ios-restaurant-outline" size={size} />
            ),
        }}
        name="mealsNavigation"
        component={MealsNavigation}
      />
      <BottomTab.Screen
        options={{
          tabBarLabel: "Favorite",
          tabBarActiveTintColor: Colors.accentColor,
          tabBarIcon: ({ size, color, focused }) =>
            focused ? (
              <Ionicons name="ios-star" size={size} color={color} />
            ) : (
              <Ionicons name="ios-star-outline" size={size} color={color} />
            ),
        }}
        name="favoritesNavigation"
        component={FavoriteNavigation}
      />
    </BottomTab.Navigator>
  );
};

const FilterNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={({ navigation }) => headerButton("Filter", navigation)}
    >
      <Stack.Screen name="FilterScreen" component={FiltersScreen} />
    </Stack.Navigator>
  );
};

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          headerShown: false,
          drawerLabelStyle: {
            fontFamily: "open-sans",
            fontWeight: "bold",
            color: Colors.accentColor,
          },
          drawerItemStyle: {
            justifyContent: "center",
            alignContent: "center",
          },
        }}
      >
        <Drawer.Screen name="Meals" component={BottomNavigation} />
        <Drawer.Screen name="Filter" component={FilterNavigation} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
