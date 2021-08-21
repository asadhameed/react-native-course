import React from "react";
import { StyleSheet } from "react-native";
import MapView, { Circle, Marker } from "react-native-maps";

import Colors from "../constants/Colors";

const MapScreen = (props) => {
  const { location } = props.route.params;
  const latitude = location ? location.lat : 28.028;
  const longitude = location ? location.lng : 65.63;
  const mapRegion = {
    latitude,
    longitude,
    longitude: 71.63,
    latitudeDelta: 0.001,
    longitudeDelta: 0.01,
  };
  return (
    <MapView style={styles.map} initialRegion={mapRegion}>
      {location && (
        // <Circle
        //   center={{
        //     latitude,
        //     longitude,
        //   }}
        //   radius={30}
        //   strokeColor={Colors.primaryRGB}
        //   fillColor={Colors.primaryRGBA}
        // />
        <Marker
          coordinate={{
            latitude: latitude,
            longitude: longitude,
          }}
          //pinColor={Colors.primary}
        />
      )}
    </MapView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    alignItems: "center",
  },
  map: {
    flex: 1,
  },
});

export default MapScreen;
