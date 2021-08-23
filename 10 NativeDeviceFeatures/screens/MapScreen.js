/***************************************************************************
 * The following code is without  MapContext
 * Now I changed to context system, all components can access a location
 *  Don't need get location from props.route.params
 ***************************************************************************/

// import React, { useState, useEffect } from "react";
// import { StyleSheet } from "react-native";
// import MapView, { Circle, Marker } from "react-native-maps";

// import Colors from "../constants/Colors";

// const MapScreen = (props) => {
//   const { location } = props.route.params;
//   const [isAvailableLocation, setIsAvailableLocation] = useState(
//     location ? true : false
//   );
//   const [selectedLocation, setSelectedLocation] = useState(
//     location
//       ? { latitude: location.latitude, longitude: location.longitude }
//       : { latitude: 33.97271663348013, longitude: 71.4385470028896 }
//   );

//   const mapRegion = {
//     ...selectedLocation,
//     latitudeDelta: 0.001,
//     longitudeDelta: 0.01,
//   };

//   useEffect(() => {
//     if (isAvailableLocation) {
//       props.navigation.setParams({ location: selectedLocation });
//     }
//   }, [selectedLocation, isAvailableLocation]);

//   const selectLocationHandler = (event) => {
//     if (!props.route.params.readOnly) {
//       setSelectedLocation(event.nativeEvent.coordinate);
//       setIsAvailableLocation(true);
//     }
//   };
//   return (
//     <MapView
//       style={styles.map}
//       initialRegion={mapRegion}
//       onPress={selectLocationHandler}
//       onDoublePress={selectLocationHandler}
//     >
//       {isAvailableLocation && (
//         // <Circle
//         //   center={{
//         //     latitude,
//         //     longitude,
//         //   }}
//         //   radius={30}
//         //   strokeColor={Colors.primaryRGB}
//         //   fillColor={Colors.primaryRGBA}
//         // />
//         <Marker coordinate={selectedLocation} pinColor={Colors.primary} />
//       )}
//     </MapView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignContent: "center",
//     alignItems: "center",
//   },
//   map: {
//     flex: 1,
//   },
// });

// export default MapScreen;

/************************************************************************************
 *  After MapContext didn't need the following function, variable or code
 *  1. Get location from MapContext, so don't need const { location } = props.route.params;
 *  1. useEffect function save location in params props.navigation.setParams({ location: selectedLocation });
 *      which don't need anymore Because location is save updateLocation in MapContext
 ********************************************************************************/

import React, { useState, useEffect, useContext } from "react";
import { StyleSheet } from "react-native";
import MapView, { Circle, Marker } from "react-native-maps";

import Colors from "../constants/Colors";
import { MapContext } from "../contexts/MapContext";

const MapScreen = (props) => {
  // const { location } = props.route.params;
  const {
    state: { location },
    updateLocation,
  } = useContext(MapContext);
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

  // useEffect(() => {
  //   if (isAvailableLocation) {
  //     props.navigation.setParams({ location: selectedLocation });
  //   }
  // }, [selectedLocation, isAvailableLocation]);

  const selectLocationHandler = (event) => {
    if (!props.route.params.readOnly) {
      setSelectedLocation(event.nativeEvent.coordinate);
      updateLocation(event.nativeEvent.coordinate);
      setIsAvailableLocation(true);
    }
  };
  return (
    <MapView
      style={styles.map}
      initialRegion={mapRegion}
      onPress={selectLocationHandler}
      onDoublePress={selectLocationHandler}
    >
      {isAvailableLocation && (
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
