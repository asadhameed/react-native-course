import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../store/actions/cart";
const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const onDeleteHandler = () => {
    dispatch(removeFromCart(item.productId));
  };

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Text style={styles.quantity}>{item.quantity}</Text>
        <Text style={styles.titleAnPrice}>{item.title}</Text>
      </View>
      <View style={styles.subContainer}>
        <Text style={styles.titleAnPrice}>${item.sum}</Text>
        <TouchableOpacity onPress={onDeleteHandler}>
          <MaterialIcons name="delete" size={25} color={"red"} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

// const CartItem = ({ item }) => {
//   return (
//     <View style={styles.container}>
//       <Text>{item.title}</Text>
//     </View>
//   );
// };

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginTop: 20,
  },
  subContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  quantity: {
    fontFamily: "open-sans",
    fontSize: 16,
    marginHorizontal: 10,
  },
  titleAnPrice: {
    fontFamily: "open-sans",
    fontSize: 16,
    fontWeight: "bold",
    marginHorizontal: 5,
  },
});

export default CartItem;
