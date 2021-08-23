/*******************************************************************
 * This section you can see how to use Redux, React and Redux library for state management
 *******************************************************************/

// import React from "react";
// import { createStore, combineReducers, applyMiddleware } from "redux";
// import { Provider } from "react-redux";
// import ReduxThunk from "redux-thunk";

// import PlaceNavigator from "./navigation/PlacesNavigator";
// import placesReducer from "./store/places-reducer";
// const rootReducer = combineReducers({
//   places: placesReducer,
// });

// const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

// export default function App() {
//   return (
//     <Provider store={store}>
//       <PlaceNavigator />
//     </Provider>
//   );
// }

/**************************************************
 * This section is define how can use Context for State Management
 *************************************************/

import React from "react";

import PlaceNavigator from "./navigation/PlacesNavigator";
import { Provider } from "./contexts/PlaceContext";
import { MapProvider } from "./contexts/MapContext";

import { createDataBase } from "./helpers/db";

createDataBase()
  .then(() => console.log("Create a database"))
  .catch((err) => console.log(err));

export default function App() {
  return (
    <Provider>
      <MapProvider>
        <PlaceNavigator />
      </MapProvider>
    </Provider>
  );
}
