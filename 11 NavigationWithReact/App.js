import React from "react";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import MealsNavigation from "./navigation/MealsNavigation";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";

import mealsReducer from "./store/reducer/meals";

// const mealsReducer=(state=[], action)=>{
//   return state;
// }

const rootReducer = combineReducers({
  meals: mealsReducer,
});

const store = createStore(rootReducer);
export default function App() {
  let [isFontLoad] = useFonts({
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
  });
  if (!isFontLoad) return <AppLoading />;
  return (
    <Provider store={store}>
      <MealsNavigation />
    </Provider>
  );
}
