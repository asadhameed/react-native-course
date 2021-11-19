# Diving into the Basics React Navigation

This exercise helps to understand the concept of React Navigation

1. Stack navigator
2. Tab navigation
   1. CreateBottomTabNavigator
   2. CreateMaterialBottomTabNavigator
   3. CreateMaterialTopTabNavigator
3. Drawer navigation
4. Own font adding in app
5. How can use Redux

## A New concept

1. Create Stack Navigation (MealsNavigation.js)
2. Create BottomTab Navigation (MealsNavigation.js)
3. Create Drawer Navigation (MealsNavigation.js)
4. If the app has these all Navigator. It will have three headers, So if want to hide header then headerShown property can make false
   1. If you hide the header in the drawer navigator then it will not be shown on another screen. Enable the drawer have two way
      1. Open drawer in the screenOptions (Stack.Navigator MealsNavigation.js)
      2. Open drawer in the screen component (useLayoutEffect CategoriesScreen.js and FavoriteScreen)
5. Header can Configuration in three place
   1. Stack.Navigator has the property screenOptions where can configure header (MealsNavigation.js)
   2. Stack.Screen has the options where can configure header (MealsNavigation.js)
   3. In the Screen Component, inside in useLayoutEffect you can configure header (FiltersScreen.js)
6. Redux is consist of four parts
   1. Create an action (actions/meals.js)
   2. Create a reducer (reducer/meals.js)
   3. Create a store and Provide that store to all components (App.js)
   4. How can take state or update state in component (CategoryMealScreen.js)

## Main Scripts

### `npm install --save @react-navigation/stack @react-navigation/native`

React Navigation is made up of some core utilities and those are then used by navigators to create the navigation structure in your app.

More help [React Navigation](https://reactnavigation.org/docs/getting-started)

### `npm start`

Runs the app in the development mode.<br />
