import React, { useLayoutEffect } from "react";
import { FlatList, TouchableNativeFeedback } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { Ionicons } from "@expo/vector-icons";

import ProductItem from "../../components/ProductItem";
import { addToCart } from "../../store/actions/cart";

const ProductsOverViewScreen = ({ navigation }) => {
  const products = useSelector((state) => state.products.availableProducts);
  const cart = useSelector((state) => state.cart);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: ({ tintColor }) => {
        return (
          <TouchableNativeFeedback
            onPress={() => navigation.navigate("cartScreen")}
          >
            <Ionicons
              name={cart.totalAmounts ? "cart" : "cart-outline"}
              size={25}
              color={tintColor}
            />
          </TouchableNativeFeedback>
        );
      },
    });
  }, []);

  const dispatch = useDispatch();

  const onPressHandler = (productId) => {
    navigation.navigate("productDetailScreen", { productId });
  };
  const onAddCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <FlatList
      data={products}
      keyExtractor={(product) => product.id}
      renderItem={({ item }) => (
        <ProductItem
          product={item}
          onPressAddToCart={() => onAddCart(item)}
          onPressDetail={() => onPressHandler(item.id)}
        />
      )}
    />
  );
};

export default ProductsOverViewScreen;
