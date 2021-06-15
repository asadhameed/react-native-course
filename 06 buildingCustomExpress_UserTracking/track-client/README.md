# In-App Authentication

This exercise helps to understand the following concept

- 1. Three Type of Navigation defined createBottomTabNavigator, createStackNavigator and Switch 'condition' navigation (App.js)
- 2. Create AuthFormComponent which can use SignIn and SignUp both pages
- 3. Generic type of Context create (createDataContext.js)
- 4. When a navigation is come on front then clear a error Message. Use navigation.addListener('focus')
- 5. When the user signin/signup then information store in local storage(AuthContext.js). If the signin screen is the initialrouterName. The signin screen load for millisecond which user can see. To solve this problem we make empty component(ResolveAuthScreen.js)
- 6. Inside in the ResolveAuthScreen is pass a callback function to redirect the signin screen (ResolveAuthScreen.js see useEffect function)
- 7. How can use SafeAreaView in the component (SafeAreaComponent.js is use in AccountScreen.js and TrackCreateScreen.js)
- 8. Import/export is function then use export default, if return object then should write export const {variable1} (LocationContext.js)
- 9. When user click on create A task then start recording the current location and if the user move to other pages then stop the recording (TrackCreateScreen.js) use navigation.isFocused() or useIsFocused hook from @react-navigation/native.
- 10. setInterval is not working properly in react native application therefore i increase time (test/\_mockLocation.js)
- 11. When callback is change Value inside in useEffect then it's not change the value (TrackCreateScreen.js comments area). So use the useCallback hooks from react. (Buggy UseEffects, Understanding Stale References, Kind of Fixed)

## Available Scripts

In the project directory, you can run:

### `expo init mobile_app`

Create a react-native project.

### 1 `npm install --save @react-navigation/stack @react-navigation/native`

### 2 `expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view`

React Navigation is made up of some core utilities and those are then used by navigators to create the navigation structure in your app.

### 3 `npm install @react-navigation/bottom-tabs`

More help [React Navigation](https://reactnavigation.org/docs/getting-started)

### 4 `npm install react-native-elements`

This library help to Consistent design across android iOS and Web. Easily style any of our components just the way you want.
More help [React Native Elements](https://reactnativeelements.com/docs)

### 5 `npm install @react-native-async-storage/async-storage`

Async Storage is asynchronous, unencrypted, persistent, key-value storage solution for your React Native application. Data storage solution for Android, iOS, Web, MacOS and Windows.
More help [Data storage system for React Native](https://react-native-async-storage.github.io/async-storage/)

### 6 `npm install react-native-safe-area-context`

By default, React Navigation tries to ensure that the elements of the navigators display correctly on devices with notches (e.g. iPhone X) and UI elements which may overlap the app content.
More help [Data storage system for React Native](https://reactnavigation.org/docs/handling-safe-area/)

### 7 `npm install react-native-maps --save-exact`

### 7 `expo install react-native-maps`

react-native-maps provides a Map component that uses Apple Maps or Google Maps on iOS and Google Maps on Android. Expo uses react-native-maps at react-community/react-native-maps.
More help [Data storage system for React Native](https://docs.expo.io/versions/latest/sdk/map-view/) <br />

<strong>Resetting Permissions for Testing Android Emulator </strong> `adb shell pm reset-permissions ` <br />

<strong>Resetting Permissions for Testing Android Device </strong> Different based on Android version. Google it <br />

<strong>Resetting Permissions for Testing iOs Simulator </strong> 'Settings >general > Reset > Reset Location and Privacy. <br />

<strong>Resetting Permissions for Testing iOs Device </strong> 'Settings >Expo > Toggle permissions (note this doesn't actually 'reset) <br />

### `npm start`

Runs the app in the development mode.<br />
