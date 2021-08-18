import React from "react";
import { View, Text, StyleSheet } from "react-native";

const PlaceDetailScreen = () => {
  return (
    <View style={styles.container}>
      <Text>This is Place Detail</Text>
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

export default PlaceDetailScreen;
