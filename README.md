# The course helps us to understand the following

- Understands the concepts of React Native
- Developed app in mobile or emulator
- JAX concepts
- State Management and Hooks
- Use Outside API

### 00 flatList (List building with style)

### 01 navigationBetweenScreen (Navigating Users Between Screens)

### 02 componentsReusable (Building Reusable Components)

### 03 stateManagement (State Management in React Components)

### 04 RestaurantSearchApp (Putting It All Together, Using Outside API's,Making Hooks Reusable,Navigation with Parameters)

### 05 StateManagementContext ( Advanced State Management with Context)

### 05 StateManagementContext-jsonserver (Data API Sync)

## Main Scripts

### `expo init mobile_app`

Create a react-native project.

### `npm install --save @react-navigation/stack @react-navigation/native`

React Navigation is made up of some core utilities and those are then used by navigators to create the navigation structure in your app.

More help [React Navigation] (https://reactnavigation.org/docs/getting-started)

### `expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view`

# Errors during course

- 1. Android - could not install _smartsocket_ listener <br />
     Error while waiting for device: java.lang.RuntimeException: Unable to create Debug Bridge: Unable to start adb server: error: could not install smartsocket listener: cannot bind to 127.0.0.1:5037: An attempt was made to access a socket in a way forbidden by its access permissions. (10013) <br />
     <strong> Solution:- </strong> If using Genymotion emulator then First, figure out where Genymotion installs it’s version of the Android adb.exe tool e.x "C:\Program Files\Genymobile\Genymotion\tools".
     Add the path to the Android adb.exe tool installed by Genymotion.
- 2.  Error: Unable to resolve module react-native-screens </br>
      Module not found: Can't resolve 'react-native-screens' in 'project\mobile_react_native\mobile-app\node_modules\@react-navigation\stack\lib\module\views\Stack' <br />
      <strong> Solution:- </strong> install the following <br />
      `expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view`
