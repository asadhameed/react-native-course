import React, { useContext } from "react";
import { StyleSheet, ActivityIndicator } from "react-native";
import MapView, { Polyline, Circle } from "react-native-maps";

import { Context as LocationContext } from "../contexts/LocationContext";
const MapComponent = (props) => {
  const { currentLocation, locations } = useContext(LocationContext).state;

  if (!currentLocation) {
    return <ActivityIndicator size="large" style={{ margin: 100 }} />;
  }
  return (
    <MapView
      style={styles.mapStyle}
      initialRegion={{
        latitude: currentLocation.coords.latitude,
        longitude: currentLocation.coords.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
      region={{
        ...currentLocation.coords,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
    >
      <Circle
        center={currentLocation.coords}
        radius={20}
        strokeColor="rgba(158, 158, 255,1.0)"
        fillColor="rgba(158, 158, 255, 0.4)"
      />
      <Polyline coordinates={locations} />
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
