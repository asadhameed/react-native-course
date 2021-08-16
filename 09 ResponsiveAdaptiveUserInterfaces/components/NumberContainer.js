import React from "react";
import { View, Text, StyleSheet } from "react-native";
import colors from "../constants/colors";
const NumberContainer = (props) => {
  return (
    <View style={{ ...styles.numberContainer, ...props.style }}>
      <Text style={{ ...styles.text, ...props.style }}>{props.children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  numberContainer: {
    borderWidth: 2,
    borderColor: colors.primary,

    padding: 5,
    borderRadius: 50,
    height: 50,
    width: 50,
    marginVertical: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: colors.primary,
  },
});

export default NumberContainer;
