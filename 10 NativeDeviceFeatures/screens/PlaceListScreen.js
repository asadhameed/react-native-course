import React, { useContext } from "react";
import { StyleSheet, FlatList } from "react-native";
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
  const places = useContext(PlaceContext).state;
  console.log(places);

  const onSelectHandler = (place) => {
    props.navigation.navigate("PlaceDetailScreen", { place });
  };
  return (
    <FlatList
      data={places}
      keyExtractor={(place) => place.id}
      renderItem={(itemDate) => (
        <PlaceItem
          place={itemDate.item}
          onSelect={() => onSelectHandler(itemDate.item)}
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
