import React, { useReducer } from "react";
import * as FileSystem from "expo-file-system";

import Place from "../modals/place";
import { insertPlace, fetchPlaces } from "../helpers/db";

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
    case "SELECT_PLACE":
      return action.payload;
    default:
      state;
  }
};
export const Provider = (props) => {
  const [state, dispatch] = useReducer(reducer, []);

  const addPlace = (title, imageUri) => {
    const promise = new Promise(async (resolve, reject) => {
      try {
        const fileName = imageUri.split("/").pop();
        const newPath = FileSystem.documentDirectory + fileName;
        await FileSystem.moveAsync({
          from: imageUri,
          to: newPath,
        });
        await insertPlace(title, newPath, "Temp place", 13.89, 19.3);
        resolve();
        dispatch({ type: "ADD_PLACE", payload: { title, imageUri: newPath } });
      } catch (err) {
        reject(err);
      }
    });
    return promise;
  };
  const fetchPlaceFromDB = async () => {
    try {
      const result = await fetchPlaces();

      const places = result.rows._array.map(
        (place) => new Place(place.id.toString(), place.title, place.imageUri)
      );
      dispatch({ type: "SELECT_PLACE", payload: places });
    } catch (err) {
      throw err;
    }
  };
  return (
    <Context.Provider value={{ state, addPlace, fetchPlaceFromDB }}>
      {props.children}
    </Context.Provider>
  );
};
