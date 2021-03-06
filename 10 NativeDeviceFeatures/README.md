# Diving into the Basics

This exercise helps to understand the concept of Native Device Features \

1. Access Camera
2. Access Map,
3. Access Location,
4. Access inside Storage (SQLite)
5. save location in context system that components can access location

## A New concept

1. Make a Header and headerRight has a button to navigate to another screen (PlacesNavigator.json)
2. Make a rightHeader function that easy to modify in future (PlacesNavigator.js function: mapScreenRightHeaderHandler placeListScreenRightHandler)
3. How can set a header title of screen from params dynamically (PlaceNavigation.js PlaceDetailScreen)
4. How can send route.params to otherScreen from headerRight.
   1. First you should set Params e.x props.navigation.setParams({ location: selectedLocation }) (MapScreen.js);
   2. Then you should navigate to other screen props.navigation.navigate("NewPlaceScreen", { location: props.route.params.location}) (PlacesNavigator.js)
5. State Management
   1. How can make a state management use Redux, react-redux library (App.js comment section)
   2. Make the State Management on Context system (App.js)
6. How can a Take Picture to use device camera (ImagePicker.js)
7. How can store image from cache memory to file System (PlaceContext.js)
8. How can create a sqlite database , create a table, insert data, select data and delete data (db.js , app.js)
9. How can handle Promise
   1. function().then(()=>{}).catch((err)=>console.log(err)) see in file (NewPlaceScreen.js function savePlaceHandler)
   2. try{}catch(err){} see in file (PlaceListScreen.js function getAllPlace)
10. How can get Location from device (LocationPicker.js)
11. MapView have different component like Circle and Marker (MapScreen.js, MapPreview.js)
12. If you want to update the MapView then use region props and also for Marker the coordinate is also take from initialRegion (MapPreview.js)
13. Create MapContext which make application easy (App.js, LocationPicker.js, MapScreen.js, NewPlaceScreen.js, PlaceDetailScreen.js, PlacesNavigator.js and MapContext). Before the every components save location and send that location as params. Now location is save in MapContext so all components and screen can easily access the location.
14. Validation of Data (NewPlaceScreen.js)

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

### `expo install expo-sqlite`

expo-sqlite gives your app access to a database that can be queried through a WebSQL-like API. The database is persisted across restarts of your app.

More help [Expo SQLITE](https://docs.expo.dev/versions/v42.0.0/sdk/sqlite/)

### `expo install expo-location`

expo-location allows reading geolocation information from the device. Your app can poll for the current location or subscribe to location update events.

More help [Expo Location](https://docs.expo.dev/versions/v42.0.0/sdk/location/)

### `expo install react-native-maps`

react-native-maps provides a Map component that uses Apple Maps or Google Maps on iOS and Google Maps on Android. Expo uses react-native-maps at react-community/react-native-maps. No setup required for use within the Expo Go app. See below for instructions on how to configure for deployment as a standalone app on Android and iOS.

More help [React Native Maps](https://docs.expo.dev/versions/v42.0.0/sdk/map-view/)

### `npm start`

Runs the app in the development mode.<br />
