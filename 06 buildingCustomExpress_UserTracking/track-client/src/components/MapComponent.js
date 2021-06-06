import React from "react";
import { StyleSheet } from "react-native";
import MapView, { Polyline } from "react-native-maps";
const MapComponent = () => {
  const fakeLocation = [];
  for (let i = 0; i < 10; i++) {
    fakeLocation.push({
      latitude: 34.02815 + i * 0.0002,
      longitude: 71.630595 + i * 0.0003,
    });
  }
  return (
    <MapView
      style={styles.mapStyle}
      initialRegion={{
        latitude: 34.02815,
        longitude: 71.630595,
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
    height: 300,
    margin: 20,
  },
});

export default MapComponent;
