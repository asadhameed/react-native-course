import "../test/_mockLocation";
import React, { useContext, useCallback } from "react";
import { StyleSheet } from "react-native";
import { Text, Button } from "react-native-elements";
import { useIsFocused } from "@react-navigation/native";

import SafeAreaComponent from "../components/SafeAreaComponent";
import MapComponent from "../components/MapComponent";
import hookUseLocation from "../hooks/useLocation";
import { Context as LocationContext } from "../contexts/LocationContext";
import TrackFormComponent from "../components/TrackFormComponent";

const serviceMessage = (message) => {
  return (
    <Text h4 style={{ margin: 15 }}>
      {message}
    </Text>
  );
};

const TrackCreateScreen = ({ navigation }) => {
  const { addLocation, state } = useContext(LocationContext);
  // you can use useIsFocused() hooked or use navigation.isFocused() so both are working
  // const isFocused = useIsFocused();
  // console.log("-------state.is-------", state.isRecording);
  // const [permissionInfo] = hookUseLocation(
  //   navigation.isFocused(),
  //   (location) => {
  //     addLocation(location, state.isRecording);
  //   }
  // );

  // console.log("-------outside in callback-------", state.isRecording);
  const callBack = useCallback(
    (location) => {
      // console.log("-------inside in callback-------", state.isRecording);
      addLocation(location, state.isRecording);
    },
    [state.isRecording]
  );

  const [permissionInfo] = hookUseLocation(navigation.isFocused(), callBack);

  return (
    <SafeAreaComponent>
      <Text h3> Create A Track</Text>
      <MapComponent />
      {permissionInfo ? serviceMessage(permissionInfo) : null}
      <TrackFormComponent />
    </SafeAreaComponent>
  );
};

const styles = StyleSheet.create({});

export default TrackCreateScreen;
