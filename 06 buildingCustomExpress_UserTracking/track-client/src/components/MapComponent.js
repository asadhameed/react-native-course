import React from "react";
import { StyleSheet } from "react-native";
import MapView, { Polyline } from "react-native-maps";
const MapComponent = (props) => {
  const fakeLocation = [];
  for (let i = 0; i < 10; i++) {
    fakeLocation.push({
      latitude: props.latitude + i * 0.0002,
      longitude: props.longitude + i * 0.0003,
    });
  }
  return (
    <MapView
      style={styles.mapStyle}
      initialRegion={{
        latitude: props.latitude,
        longitude: props.longitude,
        latitudeDelta: 0.001,
        longitudeDelta: 0.001,
      }}
      region={{
        latitude: props.latitude,
        longitude: props.longitude,
        latitudeDelta: 0.001,
        longitudeDelta: 0.001,
      }}
    >
      <Polyline coordinates={fakeLocation} />
    </MapView>
  );
};

const styles = StyleSheet.create({
  mapStyle: {
    borderWidth: 1,
    borderColor: "black",
    height: 300,
    margin: 20,
  },
});

export default MapComponent;
