import React, { useState } from "react";
import {
  ScrollView,
  Image,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import MapPreview from "../components/MapPreview";
import Colors from "../constants/Colors";

const PlaceDetailScreen = (props) => {
  /******************************************
   * special note , The following line assign props.route.params to place
   * place.address will give undefine,
   * place.place.address will give the value of address
   ******************************************/
  //const place = props.route.params;

  const { place } = props.route.params;
  const location = { latitude: place.latitude, longitude: place.longitude };
  const pickLocationOnMapHandler = () => {
    props.navigation.navigate("MapScreen", { location, readOnly: true });
  };
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Image style={styles.image} source={{ uri: place.imageUri }} />
      <View style={styles.locationContainer}>
        <View style={styles.addressContainer}>
          <Text style={styles.addressText}>{place.address}</Text>
        </View>
        <View style={styles.mapPreview}>
          <TouchableOpacity
            style={styles.mapPreview}
            onPress={pickLocationOnMapHandler}
          >
            <MapPreview
              location={location}
              onPress={pickLocationOnMapHandler}
            />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
  },
  image: {
    height: "35%",
    minHeight: 300,
    width: "100%",
    backgroundColor: "#ccc",
    borderRadius: 20,
  },
  locationContainer: {
    marginVertical: 20,
    width: "100%",
    maxWidth: 450,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    backgroundColor: "white",
    borderRadius: 10,
  },
  addressContainer: {
    padding: 20,
  },
  addressText: {
    color: Colors.primary,
    textAlign: "center",
  },
  mapPreview: {
    width: "100%",
    maxWidth: 350,
    height: 300,
    borderBottomLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
});

export default PlaceDetailScreen;
