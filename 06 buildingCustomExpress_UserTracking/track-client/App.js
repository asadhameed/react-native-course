import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import SignUp from "./src/screens/SignUp";
import SignIn from "./src/screens/SignIn";
import AccountScreen from "./src/screens/AccountScreen";
import TrackCreateScreen from "./src/screens/TrackCreateScreen";
import TrackListScreen from "./src/screens/TrackListScreen";
import TrackDetailScreen from "./src/screens/TrackDetailScreen";
import ResolveAuthScreen from "./src/screens/ResolveAuthScreen";

import {
  Provider as AuthProvider,
  Context as AuthContext,
} from "./src/contexts/AuthContext";
import { Provider as LocationProvider } from "./src/contexts/LocationContext";
const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();
function TrackStackScreen() {
  return (
    <Stack.Navigator initialRouteName="trackListScreen">
      <Stack.Screen
        name="trackListScreen"
        component={TrackListScreen}
        options={{ title: "Tracks" }}
      />
      <Stack.Screen
        name="trackDetailScreen"
        component={TrackDetailScreen}
        options={{ title: "Track Detail" }}
      />
    </Stack.Navigator>
  );
}

function SignInSignUpStackScreens() {
  return (
    <Stack.Navigator initialRouteName="resolveAuthScreen">
      <Stack.Screen
        name="resolveAuthScreen"
        component={ResolveAuthScreen}
        options={{ title: "" }}
      />
      <Stack.Screen
        name="signIn"
        component={SignIn}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="signUp"
        component={SignUp}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
function TrackBottomTab() {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name="Tracks" component={TrackStackScreen} />
      <BottomTab.Screen
        name="createTrack"
        component={TrackCreateScreen}
        options={{ title: "Create" }}
      />
      <BottomTab.Screen
        name="account"
        component={AccountScreen}
        options={{ title: "Account" }}
      />
    </BottomTab.Navigator>
  );
}

const App = () => {
  const { state } = useContext(AuthContext);
  return (
    <NavigationContainer>
      {state.token ? (
        <Stack.Navigator>
          <Stack.Screen
            name="mainTab"
            component={TrackBottomTab}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      ) : (
        <SignInSignUpStackScreens />
      )}
    </NavigationContainer>
  );
};
export default () => {
  return (
    <AuthProvider>
      <LocationProvider>
        <App />
      </LocationProvider>
    </AuthProvider>
  );
};
