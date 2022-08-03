import React from "react";
import { NavigationContainer , DrawerActions } from "@react-navigation/native";
import { Platform, TouchableNativeFeedback } from "react-native";
import { createNativeStackNavigator  } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { Ionicons } from "@expo/vector-icons";

import ProductsOverViewScreen from "../screens/shop/ProductsOverviewScreen";
import ProductDetailScreen from "../screens/shop/ProductsDetailsScreen";
import CartScreen from "../screens/shop/CartScreen";
import Colors from "../constants/Colors";
import OrderScreen from "../screens/shop/OrdersScreen";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

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

const Home = () => {
  return (
    <Stack.Navigator
      screenOptions={({ navigation })=>({
        ...headerConfig,
        headerLeft: () => ( 
          
            <TouchableNativeFeedback onPress={()=>{
              console.log(DrawerActions)
              navigation.dispatch(DrawerActions.toggleDrawer())
              }}>
              <Ionicons
                name={ "cart"}
                size={25}
              />
            </TouchableNativeFeedback>
          
        ),
        
        title: "All Product",
      })}
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
  );
};

const DrawerNavigation =()=>{
  return <Drawer.Navigator screenOptions={{...headerConfig,headerShown:false}} initialRouteName="Home">
  <Drawer.Screen  name="Home" component={Home} />
  <Drawer.Screen name="Order" component={OrderScreen} />
</Drawer.Navigator>
}

const ProductsNav = () => {
  return (
    <NavigationContainer>
      <DrawerNavigation />
      
    </NavigationContainer>
  );
};

export default ProductsNav;
