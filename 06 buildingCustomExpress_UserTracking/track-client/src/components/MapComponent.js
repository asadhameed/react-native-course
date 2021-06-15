import React, { useContext } from "react";
import { StyleSheet, ActivityIndicator } from "react-native";
import MapView, { Polyline, Circle } from "react-native-maps";

import { Context as LocationContext } from "../contexts/LocationContext";
const MapComponent = () => {
  const {
    state: { currentLocation, locations },
  } = useContext(LocationContext);

  if (!currentLocation) {
    return <ActivityIndicator size="large" style={{ margin: 100 }} />;
  }
  return (
    <MapView
      style={styles.mapStyle}
      initialRegion={{
        ...currentLocation.coords,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
      // region={{
      //   ...currentLocation.coords,
      //   latitudeDelta: 0.01,
      //   longitudeDelta: 0.01,
      // }}
    >
      <Circle
        center={currentLocation.coords}
        radius={30}
        strokeColor="rgba(158, 158, 255,1.0)"
        fillColor="rgba(158, 158, 255, 0.4)"
      />
      <Polyline coordinates={locations.map((loc) => loc.coords)} />
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
