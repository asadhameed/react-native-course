import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  TouchableNativeFeedback,
} from "react-native";

import Colors from "../constants/Colors";

const ProductItem = ({ product, onPressDetail, onPressAddToCart }) => {
  return (
    <View style={styles.container}>
      <TouchableNativeFeedback onPress={onPressDetail} useForeground>
        <View>
          <Image source={{ uri: product.imageUrl }} style={styles.image} />
          <View style={styles.productDetails}>
            <Text style={styles.title}>{product.title}</Text>
            <Text style={styles.price}>${product.price}</Text>

            <View style={styles.buttonContainer}>
              <Button
                onPress={onPressDetail}
                color={Colors.primary}
                title="View Detail"
              />
              <Button
                color={Colors.primary}
                title="To Cart"
                onPress={onPressAddToCart}
              />
            </View>
          </View>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    elevation: 5,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { height: 2, width: 0 },
    shadowRadius: 8,
    borderRadius: 20,
    backgroundColor: "white",
    height: 320,
    margin: 15,
    overflow: "hidden",
  },

  image: {
    width: "100%",
    height: "65%",
  },
  productDetails: {
    height: "35%",
  },
  title: {
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold",
    fontFamily: "open-sans",
  },
  price: {
    textAlign: "center",
    fontSize: 14,
    fontFamily: "open-sans",
  },
  textContainer: {
    margin: 0,
    justifyContent: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
});

export default ProductItem;
