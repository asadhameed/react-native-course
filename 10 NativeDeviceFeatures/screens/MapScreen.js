import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import MapView, { Circle, Marker } from "react-native-maps";

import Colors from "../constants/Colors";

const MapScreen = (props) => {
  const { location } = props.route.params;
  const [isAvailableLocation, setIsAvailableLocation] = useState(
    location ? true : false
  );
  const [selectedLocation, setSelectedLocation] = useState(
    location
      ? { latitude: location.latitude, longitude: location.longitude }
      : { latitude: 33.97271663348013, longitude: 71.4385470028896 }
  );

  const mapRegion = {
    ...selectedLocation,
    latitudeDelta: 0.001,
    longitudeDelta: 0.01,
  };

  useEffect(() => {
    if (isAvailableLocation) {
      props.navigation.setParams({ location: selectedLocation });
    }
  }, [selectedLocation, isAvailableLocation]);

  const selectLocationHandler = (event) => {
    setSelectedLocation(event.nativeEvent.coordinate);
    setIsAvailableLocation(true);
  };
  return (
    <MapView
      style={styles.map}
      initialRegion={mapRegion}
      onPress={selectLocationHandler}
      onDoublePress={selectLocationHandler}
    >
      {isAvailableLocation && (
        // <Circle
        //   center={{
        //     latitude,
        //     longitude,
        //   }}
        //   radius={30}
        //   strokeColor={Colors.primaryRGB}
        //   fillColor={Colors.primaryRGBA}
        // />
        <Marker coordinate={selectedLocation} pinColor={Colors.primary} />
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
