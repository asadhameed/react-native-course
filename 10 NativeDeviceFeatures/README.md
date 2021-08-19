# Diving into the Basics

This exercise helps to understand the concept of Native Device Features \

1. Access Camera
2. Access Map,
3. Access Location,
4. Access inside Storage (SQLite)

## A New concept

1. Make a Header and headerRight has a button to navigate to another screen (PlacesNavigator.json)
2. How can set a header title of screen from params dynamically (PlaceNavigation.js PlaceDetailScreen)
3. State Management
   1. How can make a state management use Redux, react-redux library (App.js comment section)
   2. Make the State Management on Context system (App.js)
4. How can a Take Picture to use device camera (ImagePicker.js)

## Main Scripts

### `npm install --save @react-navigation/stack @react-navigation/native`

### `expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view`

React Navigation is made up of some core utilities and those are then used by navigators to create the navigation structure in your app.

More help [React Navigation](https://reactnavigation.org/docs/getting-started)

### `npm install --save redux`

Redux is a library for state management that ensures that the application logic is well-organized and that apps work as expected. Redux makes it easy to understand your application's code regarding when, where, why, and how the state of the application is updated.

More help [Redux](https://redux.js.org/)

### `npm install --save react-redux`

React Redux is the official React UI bindings layer for Redux. It lets your React components read data from a Redux store, and dispatch actions to the store to update state.

More help [React Redux](https://react-redux.js.org/)

### `npm install --save redux-thunk`

Thunk middleware for Redux.

More help [Redux Thunk](https://github.com/reduxjs/redux-thunk)

### `expo install expo-image-picker`

expo-image-picker provides access to the system's UI for selecting images and videos from the phone's library or taking a photo with the camera.

More help [Expo Image Picker](https://docs.expo.dev/versions/v42.0.0/sdk/imagepicker/)

### `expo install expo-file-system`

expo-file-system provides access to a file system stored locally on the device. Within Expo Go, each project has a separate file system and has no access to the file system of other Expo projects. However, it can save content shared by other projects to the local filesystem, as well as share local files with other projects. It is also capable of uploading and downloading files from network URLs.

More help [Expo File System](https://docs.expo.dev/versions/v42.0.0/sdk/filesystem/)

### `npm start`

Runs the app in the development mode.<br />
