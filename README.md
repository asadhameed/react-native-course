# The course helps us to understand the following

- Understands the concepts of React Native
- Developed app in mobile or emulator
- JAX concepts
- State Management and Hooks
- Use Outside API

[00 flatList , List building with style](https://github.com/asadhameed/react-native-course/tree/main/00%20flatList)

[01 navigationBetweenScreen ,Navigating Users Between Screens](https://github.com/asadhameed/react-native-course/tree/main/01%20navigationBetweenScreen)

[02 componentsReusable ,Building Reusable Components](https://github.com/asadhameed/react-native-course/tree/main/02%20componentsReusable)

[03 stateManagement ,State Management in React Components](https://github.com/asadhameed/react-native-course/tree/main/03%20stateManagement)

[04 RestaurantSearchApp ,Putting It All Together, Using Outside API's,Making Hooks Reusable,Navigation with Parameters](https://github.com/asadhameed/react-native-course/tree/main/04%20RestaurantSearchApp)

[05 StateManagementContext ,Advanced State Management with Context](https://github.com/asadhameed/react-native-course/tree/main/05%20StateManagementContext)

[05 StateManagementContext-jsonserver, Data API Sync](https://github.com/asadhameed/react-native-course/tree/main/05%20StateManagementContext-jsonserver)

[06 buildingCustomExpress_UserTracking, Building a Custom Express API, In-App Authentication](https://github.com/asadhameed/react-native-course/tree/main/06%20buildingCustomExpress_UserTracking)

[07 Diving into the Basics](https://github.com/asadhameed/react-native-course/tree/main/07%20Diving%20into%20the%20Basics)

8.  Components_Styling:-(combines two style , TouchableWithoutFeedback, Adding Custom Fonts, The Use of Icon , ScrollView and flatList)

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
