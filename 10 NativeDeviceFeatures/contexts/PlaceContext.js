import React, { useReducer } from "react";
import Place from "../modals/place";

export const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_PLACE":
      const newPlace = new Place(
        new Date().toString(),
        action.payload.title,
        action.payload.imageUri
      );
      return [...state, newPlace];
    default:
      state;
  }
};
export const Provider = (props) => {
  const [state, dispatch] = useReducer(reducer, []);
  const addPlace = (title, imageUri) => {
    dispatch({ type: "ADD_PLACE", payload: { title, imageUri } });
  };
  return (
    <Context.Provider value={{ state, addPlace }}>
      {props.children}
    </Context.Provider>
  );
};
