import React from "react";
import { TextInput, StyleSheet } from "react-native";

const Input = (props) => {
  return <TextInput {...props} style={{ ...styles.input, ...props.style }} />;
};

const styles = StyleSheet.create({
  input: {
    borderBottomColor: "grey",
    borderWidth: 0.5,
    borderRadius: 5,
    padding: 5,
    marginVertical: 10,
  },
});

export default Input;
