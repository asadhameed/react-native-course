# A SHOP App

This project helps to understand the concept of React Navigation, Handling user input, Webserver and user Authentication

## A New concept
 1. Today I solve a problem if you have Drawer navigation how can open with stack navigation  <br />
    navigation.dispatch(DrawerActions.toggleDrawer())   (ProductsNav.js)

## Main Scripts

### `npm install --save @react-navigation/stack @react-navigation/native`

React Navigation is made up of some core utilities and those are then used by navigators to create the navigation structure in your app.

More help [React Navigation](https://reactnavigation.org/docs/getting-started)

### `npm start`

Runs the app in the development mode.<br />

## Error
 1. Error: Requiring module "node_modules\react-native-reanimated\src\Animated.js", <br/>
    Solution: In babel.config.js I tried to add the below code but not working as well <br/>
     plugins: ['react-native-reanimated/plugin'] <br/>
     and expo start --clear