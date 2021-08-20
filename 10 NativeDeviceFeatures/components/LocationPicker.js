import React from "react";
import { Text, Button, View, StyleSheet, Alert } from "react-native";
import * as Location from "expo-location";

import Colors from "../constants/Colors";

const LocationPicker = () => {
  const verifyPermission = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== "granted") {
      Alert.alert("Permission to access location was denied");
      return false;
    } else return true;
  };
  const locationPickerHandler = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Permission to access location was denied");
      return;
    }
    let location = await Location.getCurrentPositionAsync({
      accuracy: Location.LocationAccuracy.Highest,
    });
    console.log(location);
    //  console.log(status);
  };
  return (
    <View style={styles.locationPicker}>
      <View style={styles.mapPreview}>
        <Text>No Location chosen yet!</Text>
      </View>
      <Button
        title="Get User Location"
        onPress={locationPickerHandler}
        color={Colors.primary}
      />
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
    height: 150,
    borderColor: "#ccc",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default LocationPicker;
