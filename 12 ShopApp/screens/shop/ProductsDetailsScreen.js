import React, { useLayoutEffect } from "react";
import { View, Text, Image, StyleSheet, Button } from "react-native";

import { useSelector } from "react-redux";
import Colors from "../../constants/Colors";

const ProductDetailScreen = ({ route, navigation }) => {
  const { productId } = route.params;
  const products = useSelector((state) => state.products.availableProducts);
  const selectProduct = products.find((p) => p.id === productId);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: selectProduct.title,
    });
  }, []);
  return (
    <View style={styles.container}>
      <Image source={{ uri: selectProduct.imageUrl }} style={styles.image} />
      <View style={styles.contents}>
        <Button color={Colors.primary} title="Add to Cart" />
        <Text style={styles.price}>${selectProduct.price}</Text>
        <Text style={styles.description}>{selectProduct.description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: "40%",
  },
  contents: {
    marginTop: 30,
    alignItems: "center",
  },
  price: {
    fontSize: 20,
    padding: 20,
    fontFamily: "open-sans",
  },
  description: {
    margin: 20,
    textAlign: "center",
    fontFamily: "open-sans",
  },
});

export default ProductDetailScreen;
