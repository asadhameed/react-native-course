import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const ResultDetails = ({ result }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: result.image_url }} style={styles.imageStyle} />
      <Text style={styles.textNameStyle}>{result.name}</Text>
      <Text style={styles.textRatingStyle}>
        {result.rating} stars , {result.review_count} Review
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
  },
  imageStyle: {
    width: 250,
    height: 150,
    borderRadius: 5,
    marginBottom: 5,
  },
  textNameStyle: {
    fontSize: 14,
    fontWeight: "bold",
  },
  textRatingStyle: {
    fontSize: 13,
    fontWeight: "normal",
  },
});
export default ResultDetails;
