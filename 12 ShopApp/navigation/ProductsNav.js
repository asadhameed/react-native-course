import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Platform } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ProductsOverViewScreen from "../screens/shop/ProductsOverviewScreen";
import ProductDetailScreen from "../screens/shop/ProductsDetailsScreen";
import CartScreen from "../screens/shop/CartScreen";
import Colors from "../constants/Colors";

const Stack = createNativeStackNavigator();

const headerConfig = {
  headerTitleStyle: {
    fontFamily: "open-sans",
  },
  headerTintColor: Platform.OS === "android" ? Colors.text : Colors.primary,
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primary : "",
  },
  headerTitleAlign: "center",
};

const ProductsNav = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          ...headerConfig,
          title: "All Product",
        }}
      >
        <Stack.Screen
          name="productsOverView"
          component={ProductsOverViewScreen}
        />
        <Stack.Screen
          name="productDetailScreen"
          component={ProductDetailScreen}
        />
        <Stack.Screen
          name="cartScreen"
          component={CartScreen}
          options={{
            title: "Cart",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default ProductsNav;
