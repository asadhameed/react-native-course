/***************************************************************************
 * The following code is without  MapContext
 * Now I changed to context system that all components can access location
 * without sending params to other screen or components
 ***************************************************************************/

// import React, { useEffect, useState, useContext } from "react";
// import {
//   Text,
//   Button,
//   View,
//   StyleSheet,
//   Alert,
//   ActivityIndicator,
//   TouchableOpacity,
// } from "react-native";
// import * as Location from "expo-location";

// import MapPreview from "./MapPreview";
// import Colors from "../constants/Colors";

// const LocationPicker = (props) => {
//   const [userLocation, setUserLocation] = useState();
//   const [isFetchingLocation, setIsFetchingLocation] = useState(false);

//   useEffect(() => {
//     const { location } = props;
//     const selectedLocation = location
//       ? { latitude: location.latitude, longitude: location.longitude }
//       : location;
//     setUserLocation(selectedLocation);
//   }, [props]);

//   const verifyPermission = async () => {
//     const { status } = await Location.requestForegroundPermissionsAsync();
//     if (status !== "granted") {
//       Alert.alert("Permission to access location was denied");
//       return false;
//     } else return true;
//   };

//   const locationPickerHandler = async () => {
//     setIsFetchingLocation(true);
//     if (await verifyPermission()) {
//       let location = await Location.getCurrentPositionAsync({
//         accuracy: Location.LocationAccuracy.Highest,
//       });

//       setUserLocation({
//         latitude: location.coords.latitude,
//         longitude: location.coords.longitude,
//       });
//       props.onSelectedLocation({
//         latitude: location.coords.latitude,
//         longitude: location.coords.longitude,
//       });
//     }
//     setIsFetchingLocation(false);
//   };

//   const pickLocationOnMapHandler = () => {
//     props.navigation.navigate("MapScreen", { location: userLocation });
//     // props.navigation.navigate("MapScreen");
//   };

//   const viewMapPreView = () => {
//     return !userLocation ? (
//       <Text>No Location chosen yet!</Text>
//     ) : (
//       // <MapPreview location={userLocation} onPress={pickLocationOnMapHandler} />
//       <MapPreview location={userLocation} />
//     );
//   };
//   return (
//     <View style={styles.locationPicker}>
//       <View style={styles.mapPreview}>
//         {isFetchingLocation ? (
//           <ActivityIndicator size="large" color={Colors.primary} />
//         ) : (
//           <TouchableOpacity
//             style={styles.map}
//             // onPress={pickLocationOnMapHandler}
//             onLongPress={pickLocationOnMapHandler}
//           >
//             {viewMapPreView()}
//           </TouchableOpacity>
//         )}
//       </View>
//       <View style={styles.actions}>
//         <Button
//           title="Get User Location"
//           onPress={locationPickerHandler}
//           color={Colors.primary}
//         />
//         <Button
//           title="Pick on Map"
//           onPress={pickLocationOnMapHandler}
//           color={Colors.primary}
//         />
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   locationPicker: {
//     marginVertical: 20,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   mapPreview: {
//     marginBottom: 15,
//     width: "100%",
//     height: 200,
//     borderColor: "#ccc",
//     borderWidth: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   actions: {
//     flexDirection: "row",
//     justifyContent: "space-around",
//     width: "100%",
//   },
//   map: {
//     width: "100%",
//     height: "100%",
//     justifyContent: "center",
//     alignItems: "center",
//   },
// });

// export default LocationPicker;

/************************************************************************************
 *  After MapContext didn't need the following function, variable or code
 *  1. useEffect function extract location don't need
 *      Because use of MapContext System all the components will context system
 *  2. [userLocation, setUserLocation] = useState()
 *      Now location will extract form MapContext system
 *  3.  props.onSelectedLocation come from NewPlaceScreen don't need
 *      Because NewPlaceScreen will take location from MapContext
 *  4. props.navigation.navigate("MapScreen", { location: userLocation }) don't need attached params
 *      Because MapScreen Will take location from MapContext
 *
 *   After MapContext I comments the code which don't need
 ********************************************************************************/

import React, { useState, useContext } from "react";
import {
  Text,
  Button,
  View,
  StyleSheet,
  Alert,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import * as Location from "expo-location";

import MapPreview from "./MapPreview";
import Colors from "../constants/Colors";
import { MapContext } from "../contexts/MapContext";

const LocationPicker = (props) => {
  // const [userLocation, setUserLocation] = useState();
  const [isFetchingLocation, setIsFetchingLocation] = useState(false);
  const {
    updateLocation,
    state: { location },
  } = useContext(MapContext);

  // useEffect(() => {
  //   const { location } = props;
  //   const selectedLocation = location
  //     ? { latitude: location.latitude, longitude: location.longitude }
  //     : location;
  //   setUserLocation(selectedLocation);
  // }, [props]);

  const verifyPermission = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Permission to access location was denied");
      return false;
    } else return true;
  };

  const locationPickerHandler = async () => {
    setIsFetchingLocation(true);
    if (await verifyPermission()) {
      let currentLocation = await Location.getCurrentPositionAsync({
        accuracy: Location.LocationAccuracy.Highest,
      });

      updateLocation({
        latitude: currentLocation.coords.latitude,
        longitude: currentLocation.coords.longitude,
      });
      // props.onSelectedLocation({
      //   latitude: currentLocation.coords.latitude,
      //   longitude: currentLocation.coords.longitude,
      // });
    }
    setIsFetchingLocation(false);
  };

  const pickLocationOnMapHandler = () => {
    //    props.navigation.navigate("MapScreen", { location: userLocation });
    props.navigation.navigate("MapScreen", { location });
    // props.navigation.navigate("MapScreen");
  };

  const viewMapPreView = () => {
    // return !userLocation ? (
    return !location ? (
      <Text>No Location chosen yet!</Text>
    ) : (
      // <MapPreview location={userLocation} />
      <MapPreview location={location} />
    );
  };
  return (
    <View style={styles.locationPicker}>
      <View style={styles.mapPreview}>
        {isFetchingLocation ? (
          <ActivityIndicator size="large" color={Colors.primary} />
        ) : (
          <TouchableOpacity
            style={styles.map}
            // onPress={pickLocationOnMapHandler}
            onLongPress={pickLocationOnMapHandler}
          >
            {viewMapPreView()}
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.actions}>
        <Button
          title="Get User Location"
          onPress={locationPickerHandler}
          color={Colors.primary}
        />
        <Button
          title="Pick on Map"
          onPress={pickLocationOnMapHandler}
          color={Colors.primary}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  locationPicker: {
    marginVertical: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  mapPreview: {
    marginBottom: 15,
    width: "100%",
    height: 200,
    borderColor: "#ccc",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  map: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default LocationPicker;
