import "../test/_mockLocation";
import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Text, Button } from "react-native-elements";
import { useIsFocused } from "@react-navigation/native";

import SafeAreaComponent from "../components/SafeAreaComponent";
import MapComponent from "../components/MapComponent";
import hookUseLocation from "../hooks/useLocation";

import { Context as LocationContext } from "../contexts/LocationContext";

const serviceMessage = (message) => {
  return (
    <Text h4 style={{ margin: 15 }}>
      {message}
    </Text>
  );
};

const TrackCreateScreen = ({ navigation }) => {
  const { addLocation } = useContext(LocationContext);
  // you can use useIsFocused() hooked or use navigation.isFocused() so both are working
  const isFocused = useIsFocused();
  const [permissionInfo] = hookUseLocation(navigation.isFocused(), addLocation);

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
      {/* <Button
        title={context.state.isRecording ? "Stop Recording" : "Start Recording"}
        onPress={onPressButton}
      ></Button> */}
    </SafeAreaComponent>
  );
};

const styles = StyleSheet.create({});

export default TrackCreateScreen;
