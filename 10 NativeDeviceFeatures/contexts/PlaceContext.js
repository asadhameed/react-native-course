import React, { useReducer } from "react";
import * as FileSystem from "expo-file-system";

import Place from "../modals/place";
import { insertPlace, fetchPlaces, deletePlaceById } from "../helpers/db";

export const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_PLACE":
      const newPlace = new Place(
        action.payload.id.toString(),
        action.payload.title,
        action.payload.imageUri,
        action.payload.address,
        action.payload.location.latitude,
        action.payload.location.longitude
      );
      return [...state, newPlace];
    case "SELECT_PLACE":
      return action.payload;
    case "DELETE_PLACE":
      const places = state.filter((place) => place.id !== action.payload);
      return places;
    default:
      state;
  }
};
export const Provider = (props) => {
  const [state, dispatch] = useReducer(reducer, []);

  const addPlace = (title, imageUri, location) => {
    const promise = new Promise(async (resolve, reject) => {
      try {
        const fileName = imageUri.split("/").pop();
        const newPath = FileSystem.documentDirectory + fileName;
        await FileSystem.moveAsync({
          from: imageUri,
          to: newPath,
        });
        const result = await insertPlace(
          title,
          newPath,
          `${title} ${location.latitude} ${location.longitude}`,
          location.latitude,
          location.longitude
        );
        resolve();
        dispatch({
          type: "ADD_PLACE",
          payload: {
            id: result.insertId,
            title,
            imageUri: newPath,
            address: `${title}, ${location.latitude}, ${location.longitude}`,
            location,
          },
        });
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
        (place) =>
          new Place(
            place.id.toString(),
            place.title,
            place.imageUri,
            place.address,
            place.lat,
            place.lng
          )
      );
      dispatch({ type: "SELECT_PLACE", payload: places });
    } catch (err) {
      throw err;
    }
  };

  const deletePlace = async (id) => {
    try {
      await deletePlaceById(id);
      dispatch({ type: "DELETE_PLACE", payload: id });
    } catch (err) {
      throw err;
    }
  };

  return (
    <Context.Provider
      value={{ state, addPlace, fetchPlaceFromDB, deletePlace }}
    >
      {props.children}
    </Context.Provider>
  );
};
