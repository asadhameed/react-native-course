# The course helps us to understand the following

- Understands the concepts of React Native
- Developed app in mobile or emulator
- JAX concepts
- State Management and Hooks
- Use Outside API
- Components Styling
- Responsive AdaptiveUser Interfaces
- Native Device Features (SQLite, Camera and User Location)

[00 flatList](https://github.com/asadhameed/react-native-course/tree/main/00%20flatList)

1. Flat list
2. Components
3. NavigationContainer
4. CreateStackNavigator

[01 navigationBetweenScreen](https://github.com/asadhameed/react-native-course/tree/main/01%20navigationBetweenScreen)

1. NavigationContainer
2. CreateStackNavigator
3. Navigating Users Between Screens
4. TouchableOpacity and Button concept

[02 componentsReusable](https://github.com/asadhameed/react-native-course/tree/main/02%20componentsReusable)

1. NavigationContainer
2. CreateStackNavigator
3. Reusable components
4. Screen prop reference (navigation, route) [Navigation props detail](https://reactnavigation.org/docs/navigation-prop/)
5. Image on screen, Pass a value to the component on props method

[03 stateManagement](https://github.com/asadhameed/react-native-course/tree/main/03%20stateManagement)

1. Hooks (useState ,useReducer) [Hooks API Reference](https://reactjs.org/docs/hooks-reference.html)
2. State Managements (useReducer)
3. ReactNative component (View, StyleSheet, Text, TextInput)

[04 RestaurantSearchApp](https://github.com/asadhameed/react-native-course/tree/main/04%20RestaurantSearchApp)

1. Using Outside API
2. Hooks (useState, useEffect) [Hooks API Reference](https://reactjs.org/docs/hooks-reference.html)
3. Making reusable Hooks.
4. Stack.Screen options (Header Configuration give title of screen).
5. The concept of useNavigation hook from React-navigation/native.
6. Screen prop reference (navigation, route) [Navigation props detail](https://reactnavigation.org/docs/navigation-prop/)
7. Navigation with Parameters

[05 StateManagementContext](https://github.com/asadhameed/react-native-course/tree/main/05%20StateManagementContext)

1. Screen Options
2. Screen prop reference (navigation, route) [Navigation props detail](https://reactnavigation.org/docs/navigation-prop/)
3. Navigation.setOptions,
4. Make a reusable hook,
5. State Managements (useReducer)
6. Advanced State Management with Context System.

[05 StateManagementContext-jsonserver](https://github.com/asadhameed/react-native-course/tree/main/05%20StateManagementContext-jsonserver)

1.  Same as '05 StateManagementContext'
2.  Using Outside API
3.  Client and Server.

[06 buildingCustomExpress_UserTracking](https://github.com/asadhameed/react-native-course/tree/main/06%20buildingCustomExpress_UserTracking)

1. Client and Server
2. CreateBottomTabNavigator, createStackNavigator and Switch
3. Add icon in the bottomTab
4. Navigation with Parameters
5. In-App Authentication
6. Save data in local Storage [Data storage system for React Native](https://react-native-async-storage.github.io/async-storage/)
7. Context system.
8. Generic type of Context create
9. UseNavigation hook from React-navigation/native
10. SafeAreaView
11. Config Axios with instance and header
12. MongoDB (server)
13. MongoDB Modals (server)
14. Create the different router

[07 Diving into the Basics](https://github.com/asadhameed/react-native-course/tree/main/07%20Diving%20into%20the%20Basics)

1.  React Native (StyleSheet, View, FlatList, Button, Modal, TouchableOpacity etc)
2.  Flex Concept
3.  Inline Style and component Style
4.  useState Hooks
5.  Passing Data and EventHandler between components
6.  Function.bind

[08 Components_Styling](https://github.com/asadhameed/react-native-course/tree/main/08%20%20%20Components_Styling)

1. Combines two style
2. TouchableWithoutFeedback
3. Adding Custom Fonts
4. The Use of Icon [Read more about exp icons](https://docs.expo.io/guides/icons/)
5. ScrollView and flatList

[09 ResponsiveAdaptiveUserInterfaces](https://github.com/asadhameed/react-native-course/tree/main/09%20ResponsiveAdaptiveUserInterfaces)

1. Same project of "08 Components_Styling"
2. Orientation properties
3. KeyboardAvoidingView
4. ScreenOrientation ( ScreenOrientation.lockAsync, ScreenOrientation.unlockAsync) [ Expo Screen Orientation](https://docs.expo.dev/versions/latest/sdk/screen-orientation/)
5. Dimensions API from React Native
6. Platform API from ReactNative
7. Using Platform-specific Code Files
8. TouchableOpacity and TouchableNativeFeedback
9. SafeAreaView API react native

[10 NativeDeviceFeatures](https://github.com/asadhameed/react-native-course/tree/main/10%20NativeDeviceFeatures)

1. Configuration of header in Navigator
2. Set Params
3. State Management (Redux and Context system)
4. ImagePicker take pic from camera and get CameraPermissions from user
5. Store image from cache memory to file System.
6. sqlite database (create table, insert , select , delete)
7. Handle Promise
8. Get Location from device and Get LocationPermission from user
9. MapView have different component like Circle and Marker
10. Use Context system in application make easy to access data components and screen
11. Validation of Data

[11 NavigationWithReact](https://github.com/asadhameed/react-native-course/tree/main/11%20NavigationWithReact)

1. Stack Navigator
2. Tab Navigator
3. Drawer Navigator
4. Own Font
5. Use Redux

#### Main Concept

1. [Function.bind read more](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind)

## Main Scripts

### `expo init mobile_app`

Create a react-native project.

### 1 `npm install --save @react-navigation/stack @react-navigation/native`

React Navigation is made up of some core utilities and those are then used by navigators to create the navigation structure in your app.

More help [React Navigation](https://reactnavigation.org/docs/getting-started)

### 2 `expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view`

### 3 `npm install @react-navigation/bottom-tabs`

More help [React Navigation](https://reactnavigation.org/docs/getting-started)

### 4 `npm install react-native-elements`

This library help to Consistent design across android iOS and Web. Easily style any of our components just the way you want.
More help [React Native Elements](https://reactnativeelements.com/docs)

### 5 `npm install @react-native-async-storage/async-storage`

Async Storage is asynchronous, unencrypted, persistent, key-value storage solution for your React Native application. Data storage solution for Android, iOS, Web, MacOS and Windows.
More help [Data storage system for React Native](https://react-native-async-storage.github.io/async-storage/)

### 6 `npm install -g react-devtools`

This is a standalone app for debugging React Native apps.

1. Usage with React Native
   Run react-devtools from the terminal to launch the standalone DevTools app: `react-devtools`\
    More help [React Native Debugger](https://github.com/jhen0409/react-native-debugger)\
   Also visit to help [NPM React Native Debugger](https://www.npmjs.com/package/react-devtools)

### 7 `expo install expo-app-loading`

expo-app-loading tells expo-splash-screen to keep the splash screen visible while the AppLoading component is mounted.
This is useful to download and cache fonts, logos, icon images and other assets that you want to be sure the user has on their device for an optimal experience.

More help [Expo App Loading](https://docs.expo.io/versions/latest/sdk/app-loading/)

### 8 `expo install expo-image-picker`

expo-image-picker provides access to the system's UI for selecting images and videos from the phone's library or taking a photo with the camera.

More help [Expo Image Picker](https://docs.expo.dev/versions/v42.0.0/sdk/imagepicker/)

### 9 `expo install expo-file-system`

expo-file-system provides access to a file system stored locally on the device. Within Expo Go, each project has a separate file system and has no access to the file system of other Expo projects. However, it can save content shared by other projects to the local filesystem, as well as share local files with other projects. It is also capable of uploading and downloading files from network URLs.

More help [Expo File System](https://docs.expo.dev/versions/v42.0.0/sdk/filesystem/)

### 10 `expo install expo-sqlite`

expo-sqlite gives your app access to a database that can be queried through a WebSQL-like API. The database is persisted across restarts of your app.

More help [Expo SQLITE](https://docs.expo.dev/versions/v42.0.0/sdk/sqlite/)

### 11 `expo install expo-location`

expo-location allows reading geolocation information from the device. Your app can poll for the current location or subscribe to location update events.

More help [Expo Location](https://docs.expo.dev/versions/v42.0.0/sdk/location/)

### 12 `expo install react-native-maps`

react-native-maps provides a Map component that uses Apple Maps or Google Maps on iOS and Google Maps on Android. Expo uses react-native-maps at react-community/react-native-maps. No setup required for use within the Expo Go app. See below for instructions on how to configure for deployment as a standalone app on Android and iOS.

More help [React Native Maps](https://docs.expo.dev/versions/v42.0.0/sdk/map-view/)

### 13 `expo install expo-screen-orientation`

Screen Orientation is defined as the orientation in which graphics are painted on the device. For example, the figure below has a device in a vertical and horizontal physical orientation, but a portrait screen orientation. For physical device orientation, see the orientation section of Device Motion.

More help [ Expo Screen Orientation](https://docs.expo.dev/versions/latest/sdk/screen-orientation/)

### 14 `npm install react-native-safe-area-context`

By default, React Navigation tries to ensure that the elements of the navigators display correctly on devices with notches (e.g. iPhone X) and UI elements which may overlap the app content.
More help [Data storage system for React Native](https://reactnavigation.org/docs/handling-safe-area/)

# Errors during the course

- 1. Android - could not install _smartsocket_ listener <br />
     Error while waiting for device: java.lang.RuntimeException: Unable to create Debug Bridge: Unable to start adb server: error: could not install smartsocket listener: cannot bind to 127.0.0.1:5037: An attempt was made to access a socket in a way forbidden by its access permissions. (10013) <br />
     <strong> Solution:- </strong> If using Genymotion emulator then First, figure out where Genymotion installs it’s version of the Android adb.exe tool e.x "C:\Program Files\Genymobile\Genymotion\tools".
     Add the path to the Android adb.exe tool installed by Genymotion.
- 2.  Error: Unable to resolve module react-native-screens </br>
      Module not found: Can't resolve 'react-native-screens' in 'project\mobile_react_native\mobile-app\node_modules\@react-navigation\stack\lib\module\views\Stack' <br />
      <strong> Solution:- </strong> install the following <br />
      `expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view`
- 3.
