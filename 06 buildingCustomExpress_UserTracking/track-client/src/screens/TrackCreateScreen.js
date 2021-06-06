import React from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import SafeAreaComponent from "../components/SafeAreaComponent";
import MapComponent from "../components/MapComponent";
const TrackCreateScreen = () => {
  return (
    <SafeAreaComponent>
      <Text h3> Create A Track</Text>
      <MapComponent />
    </SafeAreaComponent>
  );
};

const styles = StyleSheet.create({});

export default TrackCreateScreen;
