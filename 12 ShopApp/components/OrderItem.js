import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import Colors from "../constants/Colors";

const OrderItem = (props) => {
  return (
    <View style={style.container}>
      <View style={style.summery}>
        <Text style={style.totalAmount}>{props.item.totalAmount}</Text>
        <Text>{props.item.date.toLocaleString()}</Text>
      </View>
      <View style={style.buttonSytle}>
        <Button color={Colors.primary} title="View Detail" />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    elevation: 5,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { height: 2, width: 0 },
    shadowRadius: 8,
    borderRadius: 20,
    backgroundColor: "white",
    padding: 15,
    margin: 20,
    overflow: "hidden",
    alignItems: "center",
  },

  summery: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
  },
  totalAmount: {
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
    fontFamily: "open-sans",
  },
  date: {
    fontSize: 16,
    textAlign: "center",
    fontFamily: "open-sans",
  },
  buttonSytle: {
    marginTop: 20,
    padding: 5,
  },
});

export default OrderItem;
