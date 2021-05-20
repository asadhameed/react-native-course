import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const ImageDetail = (props) => {
  const { title, imageSource, imageScore } = props;

  return (
    <View style={styles.container}>
      <Image style={styles.imageStyle} source={imageSource} />
      <Text>{title}</Text>
      <Text>{`Image Score - ${imageScore}`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: "30px",
  },
  imageStyle: {
    width: 100,
    height: 100,
  },
});

export default ImageDetail;
