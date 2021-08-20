import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import MapView, { Circle } from "react-native-maps";

import Colors from "../constants/Colors";

const MapPreview = (props) => {
  return (
    // <TouchableOpacity style={styles.map} onPress={props.onPress}>
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: props.location.lat,
        longitude: props.location.lng,
        latitudeDelta: 0.001,
        longitudeDelta: 0.001,
      }}
    >
      <Circle
        center={{
          latitude: props.location.lat,
          longitude: props.location.lng,
        }}
        radius={10}
        strokeColor={Colors.primaryRGB}
        fillColor={Colors.primaryRGBA}
      />
    </MapView>
    // </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: "100%",
  },
});

export default MapPreview;
