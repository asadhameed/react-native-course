import React, { useContext, useEffect } from "react";
import { StyleSheet, FlatList, Alert } from "react-native";
import { useSelector } from "react-redux";

import PlaceItem from "../components/PlaceItem";
import { Context as PlaceContext } from "../contexts/PlaceContext";

const PlaceListScreen = (props) => {
  /*********************************
   * The comment section is for React-redux
   ********************************/
  // const places = useSelector((state) => state.places.places);
  // console.log(places);

  /****************************************
   * The following section is for Context from react native
   ****************************************/
  const placeContext = useContext(PlaceContext);
  const places = placeContext.state;
  useEffect(() => {
    const getAllPlace = async () => {
      try {
        await placeContext.fetchPlaceFromDB();
      } catch (err) {
        Alert.alert("Can't fetch places try later");
      }
    };
    getAllPlace();
  }, []);

  const onSelectHandler = (place) => {
    props.navigation.navigate("PlaceDetailScreen", { place });
  };

  const onDeleteHandler = async (id) => {
    try {
      await placeContext.deletePlace(id);
    } catch (error) {
      Alert.alert("Can't Delete place try later");
    }
  };
  return (
    <FlatList
      data={places}
      keyExtractor={(place) => place.id}
      renderItem={(itemDate) => (
        <PlaceItem
          place={itemDate.item}
          onSelect={() => onSelectHandler(itemDate.item)}
          onDelete={() => onDeleteHandler(itemDate.item.id)}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    alignItems: "center",
  },
});

export default PlaceListScreen;
