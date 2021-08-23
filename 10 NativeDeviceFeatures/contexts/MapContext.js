import React, { useReducer } from "react";

export const MapContext = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_LOCATION":
      return { location: action.payload.location };
    case "CLEAR_LOCATION":
      return {};
    default:
      return state;
  }
};

export const MapProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, {});

  const updateLocation = (location) => {
    dispatch({ type: "UPDATE_LOCATION", payload: { location } });
  };

  const clearLocation = () => {
    dispatch({ type: "CLEAR_LOCATION" });
  };

  return (
    <MapContext.Provider value={{ state, updateLocation, clearLocation }}>
      {props.children}
    </MapContext.Provider>
  );
};
