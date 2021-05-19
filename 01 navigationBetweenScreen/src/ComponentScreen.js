import React from "react";
import { Text, StyleSheet, View } from "react-native";

export default () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>This is component screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: "200px",
  },
  textStyle: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
