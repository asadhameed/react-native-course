import React from "react";
import { Text, View, StyleSheet } from "react-native";

const goat = require("../../assets/goat.JPG");
const castle = require("../../assets/castle.JPG");
const machine = require("../../assets/machine.JPG");
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Welcome to Image screen</Text>

      <ImageDetail title={"Goat"} imageSource={goat} imageScore={9} />
      <ImageDetail title={"Machine"} imageSource={machine} imageScore={6} />
      <ImageDetail title={"Castle"} imageSource={castle} imageScore={7} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: "30px",
  },
  textStyle: {
    fontSize: 30,
    fontWeight: "bold",
  },
  imageDetailStyle: {
    marginTop: "30px",
  },
});
export default ImageScreen;
