import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ComponentScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Welcome to Component Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  textStyle: {
    fontSize: 30,
    fontWeight: "bold",
  },
});

export default ComponentScreen;
