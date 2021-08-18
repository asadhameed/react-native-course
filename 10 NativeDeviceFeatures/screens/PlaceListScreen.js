import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { useSelector } from "react-redux";

import PlaceItem from "../components/PlaceItem";

const PlaceListScreen = (props) => {
  const places = useSelector((state) => state.places.places);
  console.log(places);
  const onSelectHandler = (place) => {
    props.navigation.navigate("PlaceDetailScreen", { place });
  };
  return (
    // <View style={styles.container}>
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
    // </View>
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
