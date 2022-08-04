import React from "react";
import { View, FlatList, Text } from "react-native";
import { useSelector } from "react-redux";
import OrderItem from "../../components/OrderItem";
const OrderScreen = () => {
  const orders = useSelector((state) => state.orders.orders);
  console.log(orders);
  return (
    <View style={{ marginTop: 30 }}>
      <FlatList
        keyExtractor={(item) => item.id}
        data={orders}
        renderItem={({ item }) => <OrderItem item={item} />}
      />
    </View>
  );
};

export default OrderScreen;
