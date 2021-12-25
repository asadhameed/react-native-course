import React from "react";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";

import ProductsNav from "./navigation/ProductsNav";
import productsReducer from "./store/reducers/products";
import cartReducer from "./store/reducers/cart";

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
});

const store = createStore(rootReducer);
export default function App() {
  const [loaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
  });
  if (!loaded) return <AppLoading />;
  return (
    <Provider store={store}>
      <ProductsNav />
    </Provider>
  );
}
