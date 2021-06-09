import "../test/_mockLocation";
import React, { useEffect, useState, useContext } from "react";
import { StyleSheet } from "react-native";
import { Text, Button } from "react-native-elements";
import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
  watchPositionAsync,
  Accuracy,
} from "expo-location";

import SafeAreaComponent from "../components/SafeAreaComponent";
import MapComponent from "../components/MapComponent";

import { Context as LocationContext } from "../contexts/LocationContext";

const serviceMessage = (message) => {
  return (
    <Text h4 style={{ margin: 15 }}>
      {message}
    </Text>
  );
};
const TrackCreateScreen = () => {
  const [permissionInfo, setPermissionInfo] = useState(null);
  const context = useContext(LocationContext);

  const startWatchingLocation = async () => {
    const request = await requestForegroundPermissionsAsync();
    const { status, canAskAgain } = request;
    if (status === "denied") {
      return !canAskAgain
        ? setPermissionInfo("Please Enable Location Service")
        : setPermissionInfo("User Denied Location Permission");
    }
    setPermissionInfo(null);
    let location = await getCurrentPositionAsync({});
    console.log("long", location.coords.longitude);
    console.log("lat", location.coords.latitude);
    try {
      await watchPositionAsync(
        {
          accuracy: Accuracy.BestForNavigation,
          timeInterval: 1000,
          distanceInterval: 10,
        },
        (location) => {
          context.addLocation(location);
          const coordinate = {
            longitude: location.coords.longitude,
            latitude: location.coords.latitude,
          };
          //  console.log(coordinate);
          context.saveTrack(coordinate);
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    startWatchingLocation();
  }, []);

  const onPressButton = () => {
    return context.state.isRecording
      ? context.stopRecording()
      : context.startRecording();
  };

  return (
    <SafeAreaComponent>
      <Text h3> Create A Track</Text>
      <MapComponent />
      {permissionInfo ? serviceMessage(permissionInfo) : null}
      <Button
        title={context.state.isRecording ? "Stop Recording" : "Start Recording"}
        onPress={onPressButton}
      ></Button>
    </SafeAreaComponent>
  );
};

const styles = StyleSheet.create({});

export default TrackCreateScreen;
