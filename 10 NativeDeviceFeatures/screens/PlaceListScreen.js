import React from "react";
import { View, Text, StyleSheet } from "react-native";

const PlaceListScreen = () => {
  return (
    <View style={styles.container}>
      <Text>This is Place ListScreen</Text>
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

export default PlaceListScreen;