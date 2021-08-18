import React from "react";
import { View, Text, StyleSheet } from "react-native";

const NewPlaceScreen = () => {
  return (
    <View style={styles.container}>
      <Text>This is new PlaceScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    alignItems: "center",
  },
});

export default NewPlaceScreen;
