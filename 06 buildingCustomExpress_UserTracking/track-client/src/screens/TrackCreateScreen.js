import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
} from "expo-location";

import SafeAreaComponent from "../components/SafeAreaComponent";
import MapComponent from "../components/MapComponent";

const serviceMessage = (message) => {
  return (
    <Text h4 style={{ margin: 15 }}>
      {message}
    </Text>
  );
};
const TrackCreateScreen = () => {
  const [longitude, setLongitude] = useState(17.641273468132997);
  const [latitude, setLatitude] = useState(59.86286634717817);
  const [permissionInfo, setPermissionInfo] = useState(null);

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
    setLongitude(location.coords.longitude);
    setLatitude(location.coords.latitude);
    console.log(location);
  };

  useEffect(() => {
    startWatchingLocation();
  }, []);

  return (
    <SafeAreaComponent>
      <Text h3> Create A Track</Text>
      <MapComponent longitude={longitude} latitude={latitude} />
      {permissionInfo ? serviceMessage(permissionInfo) : null}
    </SafeAreaComponent>
  );
};

const styles = StyleSheet.create({});

export default TrackCreateScreen;
