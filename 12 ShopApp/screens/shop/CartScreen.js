import React from "react";
import { View, Text, StyleSheet, FlatList, Button } from "react-native";
import { useSelector } from "react-redux";
import Colors from "../../constants/Colors";
import CartItem from "../../components/CartItem";

const CartScreen = () => {
  const totalAmounts = useSelector((state) => state.cart.totalAmounts);
  const carts = useSelector((state) => {
    const transformedCartItem = [];
    for (let key in state.cart.items) {
      transformedCartItem.push({
        productId: key,
        title: state.cart.items[key].productTitle,
        productPrice: state.cart.items[key].productPrice,
        quantity: state.cart.items[key].quantity,
        sum: state.cart.items[key].sum,
      });
    }
    return transformedCartItem.sort((a, b) =>
      a.productId > b.productId ? 1 : -1
    );
  });

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.priceTitle}>
          Total:
          <Text style={styles.price}> ${totalAmounts} </Text>
        </Text>
        <Button disabled={carts.length === 0} title="Order Now" />
      </View>
      <FlatList
        data={carts}
        keyExtractor={(item) => item.productId}
        renderItem={({ item }) => <CartItem item={item} />}
      />
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
    margin: 15,
    overflow: "hidden",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    maxHeight: 100,
  },
  priceTitle: {
    fontFamily: "open-sans",
    fontSize: 20,
    fontWeight: "bold",
  },
  price: {
    color: Colors.primary,
  },
});

export default CartScreen;
