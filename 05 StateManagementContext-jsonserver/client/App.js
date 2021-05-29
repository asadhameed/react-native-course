import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import IndexSearch from "./src/screens/IndexScreen";
import { Provider } from "./src/context/BlogContext";
import ShowScreen from "./src/screens/ShowScreen";
import CreateBlogScreen from "./src/screens/CreateBlogScreen";
import EditBlogScreen from "./src/screens/EditBlogScreen";

const Stack = createStackNavigator();
export default function App() {
  return (
    <Provider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="indexSearch">
          <Stack.Screen
            name="indexScreen"
            component={IndexSearch}
            options={{ title: "Blogs", headerTitleAlign: "center" }}
          />
          <Stack.Screen
            name="showScreen"
            component={ShowScreen}
            options={{ title: "BLog", headerTitleAlign: "center" }}
          />
          <Stack.Screen
            name="createBlogScreen"
            component={CreateBlogScreen}
            options={{
              title: "New Blog",
              headerTitleAlign: "center",
            }}
          />
          <Stack.Screen
            name="edit"
            component={EditBlogScreen}
            options={{ title: "Edit Blog", headerTitleAlign: "center" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
