import React, { useState, useEffect } from "react";

import {
  Text,
  StyleSheet,
  Image,
  FlatList,
  View,
  ScrollView,
} from "react-native";
import YelpApI from "../api/yelp";
const ResultShowScreen = ({ route, navigation }) => {
  const [result, setResult] = useState(null);
  const { id } = route.params;
  const getResult = async () => {
    const response = await YelpApI.get(`/${id}`);
    setResult(response.data);
  };
  useEffect(() => {
    getResult();
  }, []);

  if (!result) return null;
  return (
    <View style={styles.container}>
      <Text style={styles.textNameStyle}>{result.name}</Text>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => (
          <Image style={styles.imageStyle} source={{ uri: item }} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    alignItems: "center",
  },
  imageStyle: {
    width: 300,
    height: 200,
    borderRadius: 20,
    margin: 20,
  },
  textNameStyle: {
    alignItems: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
  textRatingStyle: {
    fontSize: 13,
    fontWeight: "normal",
  },
});

export default ResultShowScreen;
